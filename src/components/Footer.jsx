export default function Footer(props) {
  const { showModal, handleToggleModel, data } = props;

  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        {/* data "?" is a optional chaining syntax in case it doesnt exist */}
        <h1>APOD PROJECT</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleToggleModel}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
