import React from "react";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import commentsAction from "../redux/actions/commentsAction";
import Swal from "sweetalert2";
import deletes from "../asset/delete.png"
import edit from "../asset/edit.png"
import { height } from "@mui/system";
export default function Comments(props) {
    let { eventId } = props;
    const { id, token, logged } = useSelector((state) => state.userReducer);//traigo id y token
    const [open, setOpen] = useState(false);//actualizo estado del despegable
    const [open2, setOpen2] = useState(false);
    const dispatch = useDispatch();//enviamos acciones y desencadenar un cambio de etado
    let [reload, setReload] = useState(true);//actualiza el estado
    
    const { getComment, createComment, deleteComment, editComment } =commentsAction;//desdectructuro y traigo las acciones
    let [comments, setComments] = useState([]);//actualizo los comentarios //state actualiza estados


    const handleOpen2 = () => {
        open2 ? setOpen2(false) : setOpen2(true);
    };

    useEffect(() => {
        getMyComments()//traerme todos los comentarios del usuarrio,despues los recarga
        // eslint-disable-next-line 
    }, [reload]);



    async function getMyComments() {
        let res = await dispatch(getComment({ id: eventId }));
        setComments(res.payload.comments);//nos va a traer datos para cumplir con una accion
    }

    const handleOpen = () => {
        open ? setOpen(false) : setOpen(true);
    };

    let information = useRef(); //guarda info lo usamos en el form
    let comment = useRef(); //guarda info lo usamos en el form
    console.log(comment)


    async function newComment(event) {
        event.preventDefault();
        let newComment = {
            userId: id,
            showId: eventId,
            comment: comment.current.value,
            date: new Date(),
        };
        Swal.fire({
            icon: "question",
            title: " Do you want to post a comment?",
            showConfirmButton: true,
            iconColor: "#01344f",
            confirmButtonColor: "#01344f",
            confirmButtonText: "Yes",
            showCancelButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                let data = {
                    headers: token,
                    data: newComment,
                };
                try {
                    await dispatch(createComment(data));
                    information.current.reset()
                    setReload(!reload);//setea el estado y lo cambia a false para volver a empezar
                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        icon: "warning",
                        confirmButtonColor: "#01344f",
                        iconColor: "#01344f",
                        title: error.response.data.message.join("<br/>"),
                        showConfirmButton: true,
                    });
                }

            }
        });
    }
console.log(id);

    async function editComments(event) {
        event.preventDefault();
        let edit = {
            userId: id,
            showId: eventId,
            comment: comment.current.value,
            date: "02-02-2023",
        };


        Swal.fire({
            icon: "question",
            title: " Do you want to post a comment?",
            showConfirmButton: true,
            iconColor: "#01344f",
            confirmButtonColor: "#01344f",
            confirmButtonText: "Yes",
            showCancelButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                let data = {
                    id: event.target.name,
                    token: token,
                    edit: edit,
                };
                try {
                    await dispatch(editComment(data));
                    setReload(!reload)
                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        icon: "warning",
                        confirmButtonColor: "#01344f",
                        iconColor: "#01344f",
                        title: error.response.data.message.join("<br/>"),
                        showConfirmButton: true,
                    });
                }
            }
        });
    }

    return (
        <div>
            
            {logged &&
            <form class=" textarea" onSubmit={newComment} ref={information}>
                <div className="sub" >
                    <input placeholder="Leave your comment" type="text" className="cajacoment" name="comment" ref={comment}
                    />
                    <div>
                        <div class="">
                            <input
                                className="btn3"
                                type="submit"
                                value="Post comment"
                            />
                        </div>
                    </div>
                </div>
            </form>
            }
            <div className="btn3">
            {open ? <h4 onClick={handleOpen} className="pointer">Close</h4>
                    : <h4 onClick={handleOpen} className="pointer">View Comments</h4>}
            </div>
            {open ? (
    <div>
        {comments?.map((item) => {
            function deleteFunc() {
                Swal.fire({
                    icon: "question",
                    title: " Do you want to delete a comment?",
                    showConfirmButton: true,
                    iconColor: "#01344f",
                    confirmButtonColor: "#01344f",
                    confirmButtonText: "Yes",
                    showCancelButton: true,
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        await dispatch(deleteComment({ idComment: item._id, token }));
                    }
                    setReload(!reload);
                });
            }
            return (
                    <div className={
                        item.userId.logged === true ? ("containerCard-logged")
                    : ("containerCard2")}>
                        <div>
                            <div className="comentarioUser">
                                <div>
                                    <Image src={item?.userId?.photo}  className="img-coment"/>
                                </div>
                                <div>
                                    <h6>{item?.userId?.name} </h6>
                                </div>
                            </div>
                            <div className="flex column g-25">
                                <p className="comment-text">{item.comment}</p>
                                {item?.userId?._id === id ? (
                                    <div className="deleteedit">
                                        <div className="delete edit-B">
                                            <h5 onClick={handleOpen2}>
                                                {open2 ? "Close" : ""}
                                                <Image src={edit} style={{width:20 , height:20}} alt="img" />
                                            </h5>
                                            <div>
                                                {open2 ? (
                                                    <form className=" textarea" ref={information}>
                                                        <div className="div-edit">
                                                            <input
                                                                defaultValue={comments?.comment}
                                                                type="text "
                                                                className=" textarea2"
                                                                name="comment"
                                                                ref={comment}
                                                            />
                                                            <div>
                                                                <div class="flex g-25">
                                                                    <input
                                                                        type="submit"
                                                                        value="Edit comment"
                                                                        className="delete"
                                                                        onClick={editComments}
                                                                        name={item._id}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="delete">
                                            <Image
                                                src={deletes}
                                              style={{width:20 , height:20}}
                                                alt="img"
                                                onClick={deleteFunc}
                                            />
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
            );
        })}
    </div>
) : null}
        </div>
    );
}
