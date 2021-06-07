import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../modals/Base";


const Add = ({ show, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState({});

 
  const handleChange = (e) => { 
    setErrors({});
    setUserId({ ...userId, [e.target.userId]: e.target.value });
    setTitle({ ...title, [e.target.title]: e.target.value });
    setBody({ ...body, [e.target.body]: e.target.value });
    setId({ ...id, [e.target.id]: e.target.value });
  };

  const onSubmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`userId`, userId);
      console.log(res);
      setLoading(false);
      onClose();
    } catch (error) {
      setLoading(false);
      setErrors(error.response.data.errors);
      console.error("ERROR UPDATING BODY", error);
    }
  };

  return (
    <Modal
      show={show}
      close={() => {
        setErrors({});
        setUserId({});
        setTitle({});
        setBody({});
        setId({});
        onClose();
      }}
      
    >
      <Modal.Body>
        <form className="" >
            <div>
              <input
                label="UserId"
                type="text"
                value={userId?.userId}
                onChange={handleChange}
                name="userId"
                error={errors?.userId}
              />
            </div>
      
            <div>
              <input
                label="Id"
                type="text"
                value={userId?.id}
                onChange={handleChange}
                name="id"
                error={errors?.id}
              />
            </div>

           
            <div>
              <input
                label="Titre"
                type="text"
                value={userId?.title}
                onChange={handleChange}
                name="titre"
                error={errors?.title}
              />
            </div>

            <div>
              <input
                label="Body"
                type="text"
                value={userId?.body}
                onChange={handleChange}
                name="body"
                error={errors?.body}
              />
            </div>
        

          
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div className="flex">
          <button
            className=""
            onClick={onSubmit}
            disabled={loading}
          >
            Enregistrer
          </button>

          <button
            className=""
            onClick={onClose}
          >
            Fermer
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default Add;
