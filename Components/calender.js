import React from "react";
import ReactDOM from "react-dom";
import events from "./events";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css'
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
import {MdOutlineHome } from 'react-icons/md';
import {BsFillQuestionCircleFill} from 'react-icons/bs';
import {TiArrowForward} from 'react-icons/ti';
const localizer = momentLocalizer(moment)
const DragAndDropCalendar = withDragAndDrop(Calendar);

export default class Dnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events
    };

    this.moveEvent = this.moveEvent.bind(this);
  }

  moveEvent({ event, start, end }) {
    const { events } = this.state;

    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    this.setState({
      events: nextEvents
    });
  }

  resizeEvent = (resizeType, { event, start, end }) => {
    const { events } = this.state;

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    this.setState({
      events: nextEvents
    });
  };

  render() {
    return (
      <div className="col-8 bg-light"style={{height: "calc(100vh - 17px)"}}>
<div className="d-flex bg-white">
<div className=" bg-light m-2 px-2"style={{borderRadius:"39px",height:"25px"}}><p className=" text-nowrap" style={{fontSize:"12px"}}><MdOutlineHome/></p></div>
  <div className=" bg-light m-2 px-2"style={{borderRadius:"39px",height:"25px"}}><p className=" text-nowrap" style={{fontSize:"12px"}}>leave-list</p></div>
  <div className=" bg-light m-2 px-2"style={{borderRadius:"39px",height:"25px"}}><p className=" text-nowrap" style={{fontSize:"12px"}}>Assign-leave</p></div>
  <div className=" bg-light m-2 px-2" style={{borderRadius:"39px",height:"25px"}}><p className=" text-nowrap" style={{fontSize:"12px"}}>Apply</p></div>
  <div className=" bg-light m-2 px-2" style={{borderRadius:"39px",height:"25px"}}><p className=" text-nowrap"  style={{fontSize:"12px"}}>Myleave Usage</p></div>
  <div className="  m-2 px-2" style={{borderRadius:"39px",height:"25px",backgroundColor:"orange"}}><p className=" text-nowrap"  style={{fontSize:"12px"}}>leave-Calender</p></div>
  <div className=" bg-light m-2 px-2" style={{borderRadius:"39px",height:"25px"}}><p className=" text-nowrap"  style={{fontSize:"12px"}}>my-leave</p></div>
  <div className=" bg-light m-2 px-2" style={{borderRadius:"39px",height:"25px"}}><p className=" text-nowrap"  style={{fontSize:"12px"}}> <BsFillQuestionCircleFill/></p></div>
  <div className=" bg-light m-2 px-2" style={{borderRadius:"39px",height:"25px"}}><p className=" text-nowrap"  style={{fontSize:"12px"}}> <TiArrowForward/>

</p></div>


</div>
     <div className="card bg-white h-100 m-3">   
      <DragAndDropCalendar
       localizer={localizer}
        selectable
        events={this.state.events}
        onEventDrop={this.moveEvent}
        resizable
        onEventResize={this.resizeEvent}
        defaultView={"month"}
        defaultDate={new Date(2015, 3, 12)}
      /></div></div>
    );
  }
}