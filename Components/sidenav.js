import react from"react";
import { FiSearch } from 'react-icons/fi';
import {AiFillGift} from "react-icons/ai";
import {TbReportSearch} from "react-icons/tb"
import {AiOutlineFieldTime} from "react-icons/ai"
import {TbNotes} from "react-icons/tb"
export default function SideNav() {
    return (
        <div className="col-4">

      <div className="card h-100"style={{borderRadius:"37%"}}>
       <div className="card align-center h-25">
        <img src="https://picsum.photos/id/237/200/300"  style={{  borderRadius: "50%",height:"50%",width:"50%",marginLeft:"auto",marginRight:"auto"
}}/>
        <div className="card-body">
          <div className="card-title text-center">abhishek</div>
        </div>
       </div>

      <div class="border-rounded">
      <div className="d-flex"style={{height:"25px"}}>
     <div style={{height:"25px"}}> <FiSearch/></div>    <input type="text"  className = "rounded w-100"placeholder="search">
            
                            </input></div> 
     <div className="my-3 mr-3">                       
     <div className="d-flex  "> <p className="mx-2"><AiFillGift/></p><p>hr administrative</p></div>
     <div className="d-flex"> <p className="mx-2"><AiFillGift/></p><p>employee manamgement</p></div> 
     <div className="d-flex"> <p className="mx-2"><TbReportSearch/></p><p>reports and analyitics</p></div>
     <div className="d-flex" style={{backgroundColor:"orange",borderRadius:"0% 28% 28% 0%"}}><p className="mx-2"><TbReportSearch/></p><p>leave</p></div>
     <div className="d-flex"> <p className="mx-2"><AiOutlineFieldTime/></p><p>time tracking</p></div> 
     <div className="d-flex"> <p className="mx-2"><TbNotes/></p><p>Attendence</p></div>
     <div className="d-flex"> <p className="mx-2"><TbNotes/></p><p>outstamding</p></div>
     <div className="d-flex"> <p className="mx-2"><TbNotes/></p><p>training</p></div>
     <div className="d-flex"> <p className="mx-2"><TbNotes/></p><p>more</p></div>
                        
                        </div>
   </div> 
      </div>
      </div>
    );
  }