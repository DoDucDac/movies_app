import * as Icon from "react-bootstrap-icons";

const Loading = ({ style }: any) => (
  <div className={`list-loading ${style ? style : ""}`}>
    <Icon.ArrowClockwise color="white" size={40} />
  </div>
);

export default Loading;
