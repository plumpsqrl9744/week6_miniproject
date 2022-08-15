import { useState } from "react"
import "./FileUpload.scss";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate } from "react-router-dom"

const FileUpload = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState(
        {
            titles : "",
            contents:""
        }
    );
    const onChange = (e) => {
        e.preventDefault();
        // setTitle(e.target.value)
        setPosts({...posts,
            titles:e.target.value
        })
    }
    const onChanges = (e) => {
        e.preventDefault();
        // setContent(e.target.value)
        setPosts({...posts,
            contents:e.target.value
        })
    }
    const handlePost = (e) => {
        e.preventDefault();
        // setPosts({...posts,
        //     titles:title,
        //     contents:content
        // })
        if (posts.contents==="" || posts.titles===""){
            alert("내용과 제목을 입력해주세요.")
        }
        navigate("/")
        console.log(posts)
    }
    const [selectedImages, setSelectedImages] = useState([]);
    const [imgSelect , setImgSelect] = useState(false)
    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);
        setImgSelect((prev) => !prev)
        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });
        console.log(imagesArray)
        // setSelectedImages((previousImages) => previousImages.concat(imagesArray));
        setSelectedImages(imagesArray)
        // FOR BUG IN CHROME
        event.target.value = "";
    };

    const deleteHandler = (image) => {
        setSelectedImages(selectedImages.filter((e) => e !== image));
        URL.revokeObjectURL(image);
        setImgSelect((prev) => !prev)
    }
    
    const ImageUpload = () => {
    return(
        <label className="img-label">
            {imgSelect ? null 
                : <div>
                + Add image
                </div>}
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
                    <Form.Control name="title" placeholder="Title" value={posts.titles} onChange={onChange}/>
                </Form.Group>
                <Form.Group className="input-box">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" name="content" rows={3} value={posts.contents} placeholder ="Content" onChange={onChanges}/>
                </Form.Group>
                <Button onClick={handlePost}>Submit</Button>
            </Form>
        </div>
    )
}

export default FileUpload