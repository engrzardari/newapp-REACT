import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

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
    
    capitalizeLetter = (str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    constructor(props){
        super(props);
        console.log('Hi Constructor from news component');
        this.state= {
            articles : [],
            laoding : true,
            page:1,
            stopNext:0,
            totalResults:0,
        }
  
        document.title = `${(this.capitalizeLetter(this.props.category)=='General')? 'Home': this.capitalizeLetter(this.props.category) } - Quick News`;
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

    fetchMoreData = async () => {
            
        this.setState({page:this.state.page+1});
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c57abd292f14ee691ab7cfe36596f9e&pageSize=${this.props.pageSize}&page=${this.state.page}` ;
            
            let data = await fetch(url);
            let pareseData = await data.json(data);
            // console.log(pareseData);
            this.setState({
                articles: this.state.articles.concat(pareseData.articles),
                totalResults:pareseData.totalResults,
                laoding : false,
            })
      };
 

    render() {
        return (
            <>
                <h3 className="my-3 text-center"> Top {(this.capitalizeLetter(this.props.category)!='General') ? this.capitalizeLetter(this.props.category) :''} Headlines</h3>
                <span className='results'>Results : {this.state.totalResults}</span>
                 {this.state.laoding && <Spinner/>} 
                <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length!=this.state.totalResults}
                loader={<Spinner/>}
                >
                <div className='container my-5'>
                    <div className="row">
                        {this.state.articles.map((element)=>{                
                            return <div key={element?element.url:''} className="col-md-4 my-2">
                                <NewsItem title ={element ? element.title:''} desc={element?element.description:''} imageurl={element?element.urlToImage:''}  newsurl={element?element.url:''} author={element?element.author:'Unknown'} publishedAt={element?element.publishedAt:''} source={element?element.source.name:''}/>
                            </div>
                        })}
                    </div>
                </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News
