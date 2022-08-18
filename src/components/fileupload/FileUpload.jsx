import { useState } from "react"
import "./FileUpload.scss";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate } from "react-router-dom"
import axios from 'axios';
// import { useLocation } from "react-router-dom";

const FileUpload = ({status}) => {
    console.log(status)
    const [selectedImages, setSelectedImages] = useState(""); // 이미지 띄우는 스테이트
    const [imageSet,setImageSet] = useState("")
    const [imgSelect,setImgSelect] = useState(false)
    const [storage,setStorage] = useState(status)
    // const {state} = useLocation(); 
    const navigate = useNavigate(); // 단순 셋팅
    const [posts, setPosts] = useState( // 게시글 작성시 input 스테이트
        {
            titles : "",
            contents: ""
        }
    );
    const onChange = (e) => {
        e.preventDefault();
        setPosts({...posts,
            titles:e.target.value
        })
    }
    const onChanges = (e) => {
        e.preventDefault();
        setPosts({...posts,
            contents:e.target.value
        })
    }
    const onSelectFile = async (e) => {
        const selectedFiles = e.target.files; 
        setImageSet(e.target.files[0])
        const selectedFilesArray = Array.from(selectedFiles);
        setImgSelect((prev) => !prev)
        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });
        console.log(imagesArray)
        // setSelectedImages((previousImages) => previousImages.concat(imagesArray));
        setSelectedImages(imagesArray)
        // FOR BUG IN CHROME
        e.target.value = "";
    };

    const handlePost = async (e) => {
        e.preventDefault();
        if (posts.contents==="" || posts.titles===""){
            alert("내용과 제목을 입력해주세요.")
        }
        let auth = localStorage.getItem("Authorization")
        let token = localStorage.getItem("Refresh-Token")
        const formData = new FormData()
        formData.append("image",imageSet)
        formData.append("content",posts.contents)
        formData.append("title",posts.titles)
        if(status===null){
            axios.post('/post', formData,{  // 게시글 보내기
                headers:{
                "Content-Type":"multipart/form-data",
                "Authorization": auth,
                "Refresh-Token": token
            }},{withCredentials:true})
            .then(function (response) {
                alert("Create Content !")
                navigate("/")
            })
            .catch(function (error) {
                console.log(error);
            })
        }else{
            axios.put(`/post/${status.id}`, formData,{  // 게시글 수정
                headers:{
                "Content-Type":"multipart/form-data",
                "Authorization": auth,
                "Refresh-Token": token
            }},{withCredentials:true})
            .then(function (response) {
                alert("Update Content !")
                navigate(`/detailpage/${status.id}`)
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }
    const deleteHandler = (image) => {
        setSelectedImages(selectedImages.filter((e) => e !== image));
        URL.revokeObjectURL(image);
        setImgSelect((prev) => !prev)
    }
    
    const ImageUpload = () => {
    return(
        <label className="img-label">
            {status === null ? <div className={imgSelect ? "none" : ""}>
                                    + Add image
                                </div>:
                                <div className={imgSelect ? "none" : ""}>
                                    + Update image
                                </div>
            }
            <input
            type="file"
            name="images"
            onChange={onSelectFile}
            accept="image/png , image/jpeg, image/webp"
            className="file-input"
            />
            <div className="images">
                {selectedImages &&
                selectedImages.map((image, index) => {
                    return (
                    <div key={image} className="image">
                        <img src={image} height="330" alt="upload" className="image"/>
                        <Button variant="primary" onClick={() => deleteHandler(image)}>
                            Delete
                        </Button>
                    </div>
                    );
                })}
            </div>
        </label>
        )
    }
    
    return (
        <div className='fileupload'>
            <ImageUpload></ImageUpload>
            <Form className="upload-container" >
                <Form.Group className="input-box">
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" placeholder = {status===null ? "Title" : status.title} value={posts.titles} onChange={onChange}/>
                </Form.Group>
                <Form.Group className="input-box">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" name="content" rows={3} value={posts.contents} placeholder = {status===null ? "Content" : status.content} onChange={onChanges}/>
                </Form.Group>
                <Button onClick={handlePost}>Submit</Button>
            </Form>
        </div>
    )
}

export default FileUpload