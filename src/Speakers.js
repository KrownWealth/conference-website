import React, {
  useContext,
  useEffect,
  useReducer,
  useState,
  useCallback,
  useMemo,
} from "react";
import Header from "./Header";
import Menu from "./Menu";
import SpeakerData from "./SpeakerData";
import SpeakerDetail from "./SpeakerDetail";
import { ConfigContext } from "./App";
import speakerReducer from "./SpeakersReducer";

function Speakers() {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  const [speakersList, dispatch] = useReducer(speakerReducer, []);

  const [isLoading, setIsLoading] = useState(true);

  const context = useContext(ConfigContext);

  useEffect(() => {
    setIsLoading(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      setIsLoading(false);
      const speakerListServerFilter = SpeakerData.filter(({ sat, sun }) => {
        return (speakingSaturday && sat) || (speakingSunday && sun);
      });
      dispatch({
        type: "setSpeakerList",
        data: speakerListServerFilter,
      });
    });

    return () => {
      console.log("cleanup");
    };
  }, [speakingSaturday, speakingSunday]);

  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };

  const heartFavouriteHandler = useCallback((e, favouriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.currentTarget.getAttribute("data-sessionid"));

    dispatch({
      type: favouriteValue ? "favourite" : "unfavourite",
      sessionId,
    });
   }, []);


   const newSpeakersList = useMemo(() =>  speakersList
   .filter(({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun))
 // .sort((a, b) => (a.firstName < b.firstName ? -1 : a.firstName > b.firstName ? 1 : 0));
 .sort(function (a,b) {
  if(a.firstName < b.firstName){
    return -1;
  }
  if (a.firstName > b.firstName){
    return 1
  }
  return 0
 }), [speakingSaturday, speakingSunday, speakersList])

 const speakerListFiltered = isLoading
 ? []
 : newSpeakersList;

  if (isLoading) return <div> Loading...</div>;



  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar margintopbottom5 checkbox-bigger">
          {context.showSpeakerSpeakingDays === true ? null : (
            <div className="hide">
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSaturday}
                    checked={speakingSaturday}
                  />
                  Saturday Speakers
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSunday}
                    checked={speakingSunday}
                  />
                  Sunday Speakers
                </label>
              </div>
            </div>
          )}
        </div>

        <div className="row">
          <div className="card-deck">
            {speakerListFiltered.map(
              ({ id, firstName, lastName, bio, favourite }) => {
                return (
                  <SpeakerDetail
                    key={id}
                    id={id}
                    favourite={favourite}
                    firstName={firstName}
                    lastName={lastName}
                    bio={bio}
                    onHeartFavouriteHandler={heartFavouriteHandler}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
