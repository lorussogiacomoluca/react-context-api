import React, { useContext } from "react";
import PostsList from "./PostsList";
import { useAlertContext } from "../contexts/AlertContext";
import Alert from "./Alert";

const PostsPage = () => {
  const { alertData, setAlertData } = useAlertContext();

  const addNewPost = () => {
    setAlertData({
      type: "danger",
      message: "Solo gli utenti iscritti possono inserire un nuovo post",
    });
    setTimeout(() => {
      setAlertData({
        type: "",
        message: "",
      });
    }, 3500);
  };

  return (
    <div>
      <div className="row mb-4">
        <div className="col d-flex justify-content-between">
          <h3>Posts List</h3>
          <div className="btn btn-success" onClick={() => addNewPost()}>
            Aggiungi nuvo post
          </div>
        </div>
      </div>
      <div className="row">
        <Alert />
      </div>
      <PostsList />
    </div>
  );
};

export default PostsPage;
