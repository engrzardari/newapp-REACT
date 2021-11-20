import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        console.log('Hi Constructor from news component');
        this.state= {
            articles : [],
            laoding : false,
            page:1,
        }
    }

    async componentDidMount(){
        // console.log('Hello CDM');
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4c57abd292f14ee691ab7cfe36596f9e&pageSize=30&page=1" ;
        let data = await fetch(url);
        let pareseData = await data.json(data);
        // console.log(pareseData);
        this.setState({articles: pareseData.articles,totalResults:pareseData.totalResults})
    }

    handlePrevious = async ()=>{
        console.log('Prevous');
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4c57abd292f14ee691ab7cfe36596f9e&pageSize=30&page=${this.state.page-1}` ;
        let data = await fetch(url);
        let pareseData = await data.json(data);
        this.setState({
            page:this.state.page-1,
            articles: pareseData.articles
        })
            
    }

    handleNext =async ()=>{
        console.log('Next')

        if(this.state.page+1>(this.state.totalResults)/30){

        }
        else
        {    
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4c57abd292f14ee691ab7cfe36596f9e&pageSize=30&page=${this.state.page+1}` ;
            let data = await fetch(url);
            let pareseData = await data.json(data);

            console.log(pareseData);

            this.setState({
                page:this.state.page+1,
                articles: pareseData.articles
            })
        }

    }


    render() {
        return (
            <div className='container my-5'>
                <h3 className="my-3">Quick News - Headlines<span>Total Results : {this.state.totalResults}</span></h3>
                <div className="row">
                    {this.state.articles.map((element)=>{                
                        return <div key={element?element.url:''} className="col-md-4 my-2">
                            <NewsItem title ={element ? element.title:''} desc={element?element.description:''} imageurl={element?element.urlToImage:''}  newsurl={element?element.url:''} />
                        </div>
                    })}
                </div>
                <div className='d-flex justify-content-around my-5'>
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-2" onClick={this.handlePrevious}>&larr; Previous</button>
                <button  type="button" className="btn btn-dark mx-2" onClick={this.handleNext}>Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News
