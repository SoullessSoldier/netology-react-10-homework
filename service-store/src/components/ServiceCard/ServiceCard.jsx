import PropTypes from "prop-types";
import "./service_card.css"

const ServiceCard = ({ data, onServiceEdit, onServiceDelete, isEdit }) => {
  const { id, name, price } = data;

  const handleServiceEdit = (name, price) => {
    onServiceEdit(name, price);
  };

  const handleServiceDelete = (serviceId, serviceName) => {
    if (confirm(`Вы уверены, что хотите удалить запись о "${serviceName}"?`)) onServiceDelete(serviceId);
  };

  return (
    <div className="service-card px-3 py-1">
      <div className="service-card-name col-6">{name}</div>
      <div className="service-card-price col-2">{price} ₽</div>
      <div className="service-card-controls col-4 d-flex justify-content-end gap-3">
        <button
          type="button"
          className="btn btn-outline-primary service-card-btn"
          onClick={() => handleServiceEdit({ id, name, price })}
          disabled={isEdit}
        >
          <div className="service-card-btn-img">
            <svg
              width="800px"
              height="800px"
              viewBox="0 -1 151 151"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M6.22296 148.379C3.07752 148.346 1.42875 146.746 1.36875 143.992C1.35956 143.214 1.4585 142.439 1.66283 141.688C3.96892 132.991 6.41008 124.328 8.58249 115.597C9.52763 111.362 11.5886 107.456 14.5525 104.281C22.6355 95.8167 30.5868 87.2255 38.7645 78.8548C60.2764 56.8356 82.8369 35.9202 105.99 15.6347C111.017 11.2304 115.963 6.72785 121.106 2.46216C124.166 -0.0753939 125.338 -0.0174305 128.429 2.61577C132.838 6.3733 137.087 10.3208 141.363 14.2319C143.665 16.3368 145.872 18.5452 148.139 20.6884C151.074 23.4635 151.067 26.4284 148.27 29.3727C143.817 34.0574 139.483 38.8507 135.025 43.5282C133.42 45.2121 131.568 46.6572 129.889 48.2728C103.622 73.5526 77.36 98.837 51.1023 124.126C46.9336 128.138 42.7597 132.147 38.4873 136.048C37.3799 136.986 36.1105 137.713 34.7413 138.195C26.5282 141.351 18.2938 144.451 10.0381 147.494C8.78969 147.881 7.51462 148.178 6.22296 148.379ZM29.0705 121.225L117.54 36.3145C115.605 34.5037 113.763 32.7782 111.597 30.7494C81.2117 57.9162 53.5695 87.7082 24.8432 116.675L29.0705 121.225ZM37.2984 129.668C66.8293 101.17 96.4713 73.5389 124.781 44.6338L122.193 41.3415C91.6589 68.8067 62.6163 97.2189 32.8583 124.735L37.2984 129.668ZM20.8472 113.027C49.0772 83.3287 77.4108 54.5732 107.13 26.88L104.078 24.1727C73.938 51.0805 45.3091 79.3681 17.8734 108.998C18.5817 109.881 19.0779 110.464 19.5338 111.08C19.9349 111.617 20.2871 112.188 20.8499 113.027H20.8472ZM142.692 26.0009C137.769 19.7201 127.209 9.38968 124.087 7.75458L110.143 19.8777L131.274 38.5073C135.146 34.2702 138.87 30.1898 142.695 26.0009H142.692ZM13.7634 112.814C12.6763 118.399 11.694 123.266 10.8194 128.152C10.7119 128.898 10.8934 129.657 11.3268 130.273C13.3349 132.776 15.4661 135.181 17.6333 137.714L30.6253 132.753L13.7634 112.814Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="150"
                    height="149"
                    fill="white"
                    transform="translate(0.777344)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </button>
        <button
          type="button"
          className="btn btn-outline-danger service-card-btn"
          onClick={() => handleServiceDelete(id, name)}
          disabled={isEdit}
        >
          <div className="service-card-btn-img">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 16L17.5 18.5M20 21L17.5 18.5M17.5 18.5L20 16M17.5 18.5L15 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  onServiceEdit: PropTypes.func,
  onServiceDelete: PropTypes.func,
  isEdit: PropTypes.bool,
};

export default ServiceCard;
