import React from "react";
import ImageToggleOnScroll from "./imageToggleOnScroll";

const SpeakerDetail = React.memo(({
  id,
  firstName,
  lastName,
  favourite,
  bio,
  onHeartFavouriteHandler,
}) => {
  return (
    <div className="card col-4 cardmin">
      <ImageToggleOnScroll
        primaryImg={`/static/speakers/black-white/speakers/Speaker-${id}.jpg`}
        secondaryImg={`/static/speakers/Speaker-${id}.jpg `}
        alt={`${firstName} ${lastName}`}
      />
      <div className="card-body">
        <h4 className="card-title">
          <button
            data-sessionid={id}
            className={favourite ? "heartredbutton" : "heartdarkbutton"}
            onClick={(e) => {
              onHeartFavouriteHandler(e, !favourite);
            }}
          >
            {/* {favourite ? "❤️" : "🖤"} */}
          </button>

          <span>
            {firstName} {lastName}
          </span>
        </h4>
        <span>{bio}</span>
      </div>
    </div>
  );
});

export default SpeakerDetail;
