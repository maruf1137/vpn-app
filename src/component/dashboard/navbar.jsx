const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <div className="nav d-flex justify-content-between">
      <div className="d-flex align-items-center gap-2">
        <button
          className="btn btn-primary btn-sidebar d-lg-none"
          onClick={() => setSidebar(!sidebar)}>
          {sidebar ? (
            // <svg className="icon">
            //   <use xlinkHref="/icons.svg#icon-arrow-left1"></use>
            // </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          ) : (
            // <svg className="icon">
            //   <use xlinkHref="/icons.svg#icon-arrow-right"></use>
            // </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          )}
        </button>
        <h2 className="heading mb-0">Dashboard</h2>
      </div>
      <div className="btn-area">
        <span>Refresh</span>
        <button className="refresh-btn d-flex align-items-center">
          {/* <svg className="icon">
            <use xlinkHref="/icons.svg#icon-loop2"></use>
          </svg> */}
          <img src="/icons/refresh.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
