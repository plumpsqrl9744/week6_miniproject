// import React from 'react'
// import axios from "axios";
// import { useNavigate ,useParams, useLocation } from 'react-router-dom';
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import {Link} from "react-router-dom";
// import "./UpdatePost.scss";
// import Header from '../header/Header';
// import FileUpload from '../fileupload/FileUpload';


// const UpdatePost = () => {
//     const location = useLocation()
//     console.log(location.state)

//     const ImageUpload = () => {
//         return(
//             <label className="img-label">
//                 {imgSelect ? null 
//                     : <div>
//                     + Add image
//                     </div>}
//                 <input
//                 type="file"
//                 name="images"
//                 onChange={onSelectFile}
//                 accept="image/png , image/jpeg, image/webp"
//                 className="file-input"
//                 />
//                 <div className="images">
//                     {selectedImages &&
//                     selectedImages.map((image, index) => {
//                         return (
//                         <div key={image} className="image">
//                             <img src={image} height="330" alt="upload" className="image"/>
//                             <Button variant="primary" onClick={() => deleteHandler(image)}>
//                                 Delete
//                             </Button>
//                         </div>
//                         );
//                     })}
//                 </div>
//             </label>
//             )
//         }
//     const UpdateFile = () => {
//         return(
//         <div className='fileupload'>
//             <ImageUpload></ImageUpload>
//             <Form className="upload-container" >
//                 <Form.Group className="input-box">
//                     <Form.Label>Title</Form.Label>
//                     <Form.Control name="title" placeholder="Title" value={posts.titles} onChange={onChange}/>
//                 </Form.Group>
//                 <Form.Group className="input-box">
//                     <Form.Label>Example textarea</Form.Label>
//                     <Form.Control as="textarea" name="content" rows={3} value={posts.contents} placeholder ="Content" onChange={onChanges}/>
//                 </Form.Group>
//                 <Button onClick={handlePost}>Submit</Button>
//             </Form>
//         </div>
//         )
//     }    
//     return (
//     <div className='updatepost'>
//         <Header></Header>
//         <div className="post-form">
//           <div>
//             <Link to="/"><AiOutlineArrowLeft className="arrow-left"></AiOutlineArrowLeft></Link>
//             <div className="desc">
//               Update Card !
//             </div>
//           </div>
//           <hr></hr>
//           <UpdateFile></UpdateFile>
//         </div>
    
//     </div>
//   )
// }

// export default UpdatePost