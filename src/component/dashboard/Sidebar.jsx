import { Link, useLocation } from "react-router-dom";

const navData = [
  {
    id: 1,
    title: "Dashboard",
    url: "/dashboard",
    icon: "home",
    img1: "/icons/home-1.png",
    img2: "/icons/home-2.png",
  },
  {
    id: 2,
    title: "News",
    url: "/news",
    icon: "volume",
    img1: "/icons/news-1.png",
    img2: "/icons/news-2.png",
  },
  {
    id: 3,
    title: "Settings",
    url: "/settings",
    icon: "settings",
    img1: "/icons/settings-1.png",
    img2: "/icons/settings-2.png",
  },
  {
    id: 4,
    title: "Billing",
    url: "/billing",
    icon: "dollar",
    img1: "/icons/bill-1.png",
    img2: "/icons/bill-2.png",
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <Link href="/" className="logo d-block">
        <img src="/logo.png" alt="" />
      </Link>
      <ul className="sidebar__list">
        {navData.map((item) => {
          const { id, title, url, img1, img2 } = item;
          return (
            <li key={id}>
              <Link
                to={url}
                className={
                  location.pathname == url
                    ? "sidebar__link active"
                    : "sidebar__link"
                }>
                {/* <svg className="icon">
                  <use xlinkHref={`/icons.svg#icon-${icon}`}></use>
                </svg> */}
                <img src={img1} alt="" className="icon1" />
                <img src={img2} alt="" className="icon2" />
                <span>{title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="bottom-area">
        <div className="report">
          <p className="text text-center mb-2">Something is wrong?</p>
          <button className="btn btn-primary">Report</button>
        </div>
        <div className="profile d-flex align-items-center">
          <figure className="profile__img">
            <img src="/profile.png" alt="" />
          </figure>
          <span className="name text-white">Dremfy dremfy</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
