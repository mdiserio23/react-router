import { useState } from "react";
import { useParams } from "react-router-dom";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import { useEffect, useCallback } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { quoteId } = useParams();
  const {
    sendRequest,
    status,
    data: commentsLoaded,
    error,
  } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const onAddCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    comments = <p className="centered">{error}</p>;
  }

  if (
    status === "completed" &&
    (!commentsLoaded || commentsLoaded.length === 0)
  ) {
    comments = <p className="centered">No comments yet.</p>;
  }

  if (status === "completed" && (commentsLoaded || commentsLoaded.length > 0)) {
    comments = <CommentsList comments={commentsLoaded} />;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm quoteId={quoteId} onAddComment={onAddCommentHandler} />
      )}
      {comments}
    </section>
  );
};

export default Comments;
