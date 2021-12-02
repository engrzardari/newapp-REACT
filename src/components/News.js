import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {


    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string,
    }

    static defaultProps = {
        pageSize: 8,
        country: 'us',
        category: 'general',
    }
    
    
    constructor(){
        super();
        console.log('Hi Constructor from news component');
        this.state= {
            articles : [],
            laoding : false,
            page:1,
            stopNext:0,
        }
    }


    async UpdatePage(){

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c57abd292f14ee691ab7cfe36596f9e&pageSize=${this.props.pageSize}&page=${this.state.page}` ;
        this.setState({laoding:true})
        let data = await fetch(url);
        let pareseData = await data.json(data);
        // console.log(pareseData);
        this.setState({
            articles: pareseData.articles,
            totalResults:pareseData.totalResults,
            laoding : false,
        })
    }

    async componentDidMount(){
        // console.log('Hello CDM');
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c57abd292f14ee691ab7cfe36596f9e&pageSize=${this.props.pageSize}&page=1` ;
        // this.setState({laoding:true})
        // let data = await fetch(url);
        // let pareseData = await data.json(data);
        // // console.log(pareseData);
        // this.setState({
        //     articles: pareseData.articles,
        //     totalResults:pareseData.totalResults,
        //     laoding : false,
        // })
        this.UpdatePage();
    }

    handlePrevious = async ()=>{

        this.setState({page:this.state.page-1});
        this.UpdatePage();

        // console.log('Prevous');
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c57abd292f14ee691ab7cfe36596f9e&pageSize=${this.props.pageSize}&page=${this.state.page-1}` ;
        // this.setState({laoding:true})
        // let data = await fetch(url);
        // let pareseData = await data.json(data);
        // this.setState({
        //     page:this.state.page-1,
        //     articles: pareseData.articles,
        //     stopNext:0,
        //     laoding : false,
        // })
            
    }

    handleNext =async ()=>{
        // console.log('Next')
        this.setState({laoding:true})
        if(this.state.page+1>(this.state.totalResults)/this.props.pageSize){
            this.setState({
                stopNext:1,
                laoding:false
            })
        }
        else
        {    
            
            this.setState({page:this.state.page+1});
            this.UpdatePage();
            
        
            // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c57abd292f14ee691ab7cfe36596f9e&pageSize=${this.props.pageSize}&page=${this.state.page+1}` ;
            // this.setState({laoding:true})
            // let data = await fetch(url);
            // let pareseData = await data.json(data);
            // //console.log(pareseData);
            // this.setState({
            //     page:this.state.page+1,
            //     articles: pareseData.articles,
            //     stopNext:0,
            //     laoding : false,
            // })
        }

    }


    render() {
        return (
            <div className='container my-5'>
                <h3 className="my-3 text-center">Quick News - Headlines<span>Total Results : {this.state.totalResults}</span></h3>
                {this.state.laoding && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{                
                        return <div key={element?element.url:''} className="col-md-4 my-2">
                            <NewsItem title ={element ? element.title:''} desc={element?element.description:''} imageurl={element?element.urlToImage:''}  newsurl={element?element.url:''} author={element?element.author:'Unknown'} publishedAt={element?element.publishedAt:''} source={element?element.source.name:''}/>
                        </div>
                    })}
                </div>
                <div className='d-flex justify-content-around my-5'>
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-2" onClick={this.handlePrevious}>&larr; Previous</button>
                <button disabled={this.state.stopNext===1} type="button" className="btn btn-dark mx-2" onClick={this.handleNext}>Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News
