import $ from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';

export class UserGist extends React.Component {
 constructor (props) {
    super (props);
  
    this.state = 
     { title1: 'title 1 default text ',
      title2: 'default',
      title3: 'title 3',
      id:'id',
      sidebarimg: 'img.gif',
      searchResults:[]
     }; 
 }

componentDidMount() {

    this.serverRequest = $.get(this.props.source, function (result) {
      
      let results = result.hits.hits[0];
      //let lastGist = result.hits.hits[0];
      let resultCount = result.hits.hits.length;
      
      
      this.setState({
        title1:results._source.title1,
        title3:results._source.title2,
        id:results._id,
        sidebarimg:results._source.sidebarImage,
        searchResults:result.hits.hits

      });
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }



render() {    
    let url = "http://coursesdev.uwe.ac.uk/";
    let courses = this.state.searchResults;
    
    function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
   

    const CourseList = courses.map((item, index) => {
      return (
        <div>
         <h1 key={this.state.id}>{item._source.title1}</h1>
        <p className="introdss">{htmlEntities(item._source.introduction)}</p>
        <p>{item._source.ippCode}</p>
      <img src={url + item._source.sidebarImage} />  
      </div>
      );
    });

    return (
   
      <div>
 

      {CourseList}
        
  
      </div>
        );
    }  
  
}
  
ReactDOM.render(
  <UserGist source="http://localhost/sits/course.json" />, document.getElementById('myApp')
  );