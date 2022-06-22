const Info = ({ showDone, setShowDone, count }) => {

  return (
    <div className="info">
      <div className="title">{count}item(s)</div>
      <input onChange={() => { setShowDone(!showDone) }} type="checkbox" value="Show done items" />
      <p>Show done items</p>
    </div>
  );
};

export default Info;