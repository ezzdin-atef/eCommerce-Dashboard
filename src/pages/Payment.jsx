import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Payment = (props) => {
  const [payments, setPayments] = useState([
    {
      id: "15454646",
      type: "visa",
      number: "**** **** **** **54",
    },
    {
      id: "65465448",
      type: "master",
      number: "**** **** **** **91",
    },
  ]);

  const handleDelete = (id) => {
    setPayments(payments.filter((el) => el.id !== id));
  };

  const AlterDiv = () => {
    return (
      <motion.div className="alter" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h3>
          You Don't Payment Method{" "}
          <span role="img" aria-label="Sad Emoji">
            🙁
          </span>
        </h3>
        <button className="btn btn-primary" onClick={() => toast.error("This functionality doesn't work yet 😔")}>
          <i className="fas fa-plus"></i> <span>Add New</span>
        </button>
      </motion.div>
    );
  };

  return (
    <div className="payment-settings">
      <header>
        <h2>Payment Settings</h2>
        <button className="btn btn-primary" onClick={() => toast.error("This functionality doesn't work yet 😔")}>
          <i className="fas fa-plus"></i> <span>Add New</span>
        </button>
      </header>
      {payments.length > 0 ? (
        <div className="content">
          {payments.map((el) => (
            <div key={el.id} className="payment">
              {el.type === "visa" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="45.764" height="14.321" viewBox="0 0 45.764 14.321">
                  <g id="visa_1_" data-name="visa (1)" transform="translate(0 -100.23)">
                    <g id="Group_66" data-name="Group 66" transform="translate(4.276 100.23)">
                      <g id="Group_65" data-name="Group 65" transform="translate(0 0)">
                        <path
                          id="Path_58"
                          data-name="Path 58"
                          d="M41.692,100.23l-2.3,14.293h3.671l2.3-14.293Zm11.073,5.822c-1.283-.634-2.069-1.061-2.069-1.709.016-.589.665-1.193,2.115-1.193a6.388,6.388,0,0,1,2.734.529l.333.149.5-2.99a9.266,9.266,0,0,0-3.3-.589c-3.625,0-6.178,1.885-6.194,4.581-.03,1.989,1.828,3.093,3.218,3.756,1.42.679,1.9,1.12,1.9,1.723-.016.927-1.148,1.354-2.205,1.354a7.466,7.466,0,0,1-3.445-.737l-.483-.22-.513,3.108a11.465,11.465,0,0,0,4.094.738c3.853,0,6.36-1.856,6.391-4.729C55.862,108.246,54.882,107.039,52.765,106.052Zm13.024-5.778h-2.84a1.819,1.819,0,0,0-1.919,1.15l-5.453,13.1H59.43l1.061-2.836H64.8l.551,2.847h3.4Zm-4.23,8.551c.074.007,1.479-4.629,1.479-4.629l1.118,4.629ZM36.328,100.23l-3.6,9.711-.392-1.915a10.671,10.671,0,0,0-5.077-5.8l3.294,12.286H34.44l5.772-14.277H36.328Z"
                          transform="translate(-27.262 -100.23)"
                          fill="#2394bc"
                        />
                      </g>
                    </g>
                    <path
                      id="Path_59"
                      data-name="Path 59"
                      d="M8.143,102.089a2.4,2.4,0,0,0-2.388-1.841H.059L0,100.512c4.443,1.1,8.173,4.466,9.383,7.637Z"
                      transform="translate(0 -0.015)"
                      fill="#efc75e"
                    />
                  </g>
                </svg>
              ) : (
                <svg
                  id="mastercard"
                  xmlns="http://www.w3.org/2000/svg"
                  width="47.75"
                  height="30.71"
                  viewBox="0 0 47.75 30.71"
                >
                  <path
                    id="Path_64"
                    data-name="Path 64"
                    d="M15.356,0A15.355,15.355,0,1,0,30.713,15.355,15.373,15.373,0,0,0,15.356,0Zm0,0"
                    fill="#ffbc4f"
                  />
                  <path
                    id="Path_65"
                    data-name="Path 65"
                    d="M198.036,0a15.355,15.355,0,1,0,15.356,15.355A15.373,15.373,0,0,0,198.036,0Zm0,0"
                    transform="translate(-165.643)"
                    fill="#ff7d4f"
                  />
                  <g id="Group_69" data-name="Group 69" transform="translate(17.037 9.89)">
                    <path
                      id="Path_66"
                      data-name="Path 66"
                      d="M192.912,205.075a1.4,1.4,0,0,0-1.4-1.4h-4.145a15.227,15.227,0,0,0,.98,2.8h3.165A1.4,1.4,0,0,0,192.912,205.075Zm0,0"
                      transform="translate(-186.93 -194.571)"
                      fill="#ffbc4f"
                    />
                    <path
                      id="Path_67"
                      data-name="Path 67"
                      d="M190.918,107.45a1.4,1.4,0,0,0-1.4-1.4h-3.576a15.222,15.222,0,0,0-.774,2.8h4.35a1.4,1.4,0,0,0,1.4-1.4Zm0,0"
                      transform="translate(-184.936 -106.051)"
                      fill="#ffbc4f"
                    />
                    <path
                      id="Path_68"
                      data-name="Path 68"
                      d="M192.509,156.262a1.4,1.4,0,0,0-1.4-1.4h-8.4c-.018.3-.028.606-.028.912a15.419,15.419,0,0,0,.116,1.886h8.315A1.4,1.4,0,0,0,192.509,156.262Zm0,0"
                      transform="translate(-182.68 -150.311)"
                      fill="#ffbc4f"
                    />
                  </g>
                </svg>
              )}
              <h4>{el.number}</h4>
              <i className="fas fa-trash-alt" onClick={() => handleDelete(el.id)}></i>
            </div>
          ))}
        </div>
      ) : (
        <AlterDiv />
      )}
    </div>
  );
};

export default Payment;
