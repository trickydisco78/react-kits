import React from 'react';
import ReactDOM from 'react-dom';

let App = React.createClass({
    
    getInitialState: function() {
        return {
            searchResults: []
        }
    },

    showResults: function(response){
        this.setState({
            searchResults: response.results
        })
    },
    
    search: function(URL){
        $.ajax({
            type: "GET",
            dataType: 'jsonp',
            url: URL,
            success: function(response){
                this.showResults(response);
            }.bind(this)
        });
    },

    render: function(){
        
        return (
            <div>
                <SearchBox search={this.search} />
                <Results searchResults={this.state.searchResults} />
            </div>
        );
    },


});

let SearchBox = React.createClass({
    
createAjax: function(){
        let query    = ReactDOM.findDOMNode(this.refs.query).value;
        let category = ReactDOM.findDOMNode(this.refs.category).value;
        let URL      = 'https://itunes.apple.com/search?term=' + query +'&country=us&entity=' + category;
        this.props.search(URL)
    },

    render: function(){
        return (
            <div>
                <input type="text" ref="query" />
                <select ref="category">
                    <option value="software">Apps</option>
                    <option value="movie">Films</option>
                </select>
                <input type="submit" onClick={this.createAjax} />
            </div>
        );
    }


});

let Results = React.createClass({
    
    render: function(){
        let resultItems = this.props.searchResults.map(function(result) {
            return <ResultItem key={result.trackId} trackName={result.trackName} />
        });
        return(
            <ul>
                {resultItems}
            </ul>           
        );
    }
});

let ResultItem = React.createClass({
    
    render: function(){
        return <li>{this.props.trackName}</li>;
    }
});

ReactDOM.render(<App />,  document.getElementById("content"));