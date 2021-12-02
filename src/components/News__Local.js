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
            articles : [

                        {
                            "source": {
                                "id": null,
                                "name": "TVLine"
                            },
                            "author": "Matt Webb Mitovich",
                            "title": "'All Too Well': Taylor Swift Performs the 10-Minute Hit on Saturday Night Live - TVLine",
                            "description": "RELATED STORIES SNL Video: Ted Cruz, Joe Rogan Check In on Vaxxed Big Bird SNL Debuts New Trump With her fifth turn as Saturday Night Live musical guest, Taylor Swift went big, by performing the full, 10-minute version of “All Too Well” — the same song she re…",
                            "url": "https://tvline.com/2021/11/13/snl-taylor-swift-all-too-well-video-10-minute/",
                            "urlToImage": "https://tvline.com/wp-content/uploads/2021/11/snl-taylor-swift-all-too-well.jpg?w=619",
                            "publishedAt": "2021-11-14T05:29:00Z",
                            "content": "With her fifth turn as Saturday Night Live musical guest, Taylor Swift went big, by performing the full, 10-minute version of “All Too Well” — the same song she released a “short film” music video fo… [+1108 chars]"
                        },
                        {
                            "source": {
                                "id": null,
                                "name": "Vox"
                            },
                            "author": "Ellen Ioanes",
                            "title": "What Steve Bannon’s indictment means for Trump’s stonewalling tactics - Vox.com",
                            "description": "A Steve Bannon indictment shows the DOJ willing to enforce Congress’s subpoena power.",
                            "url": "https://www.vox.com/2021/11/13/22779785/bannon-indictment-trump-stonewall-january-6-committee-executive-privilege",
                            "urlToImage": "https://cdn.vox-cdn.com/thumbor/h67rGjU0VU8tFlsp_ld9jKc_rfk=/0x0:3200x1675/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23012151/1228128971.jpg",
                            "publishedAt": "2021-11-13T23:15:14Z",
                            "content": "On Friday, Steve Bannon, a former top adviser to President Donald Trump, was indicted for contempt of Congress, signaling that Trumps ability to shield himself from potentially damning disclosures re… [+7610 chars]"
                        },
                        {
                            "source": {
                                "id": "newsweek",
                                "name": "Newsweek"
                            },
                            "author": "Fatma Khaled",
                            "title": "Marjorie1 Taylor Greene Calls AOC, the Squad 'Brave' for Voting Against Infrastructure Bill - Newsweek",
                            "description": "The number of Republicans who think that Donald Trump will \"very likely\" be reinstated as president before 2021 ends increased 2 percent this month.",
                            "url": "https://www.newsweek.com/republicans-saying-trump-likely-reinstated-years-end-jumps-28-percent-1649012",
                            "urlToImage": "https://d.newsweek.com/en/full/1931990/more-republicans-trump-will-reinstated.jpg",
                            "publishedAt": "2021-11-13T21:30:49Z",
                            "content": "A new poll found that more Republicans now think that Donald Trump will likely be reinstated as president before the end of 2021.\r\nThe survey by the Economist/YouGov was conducted between November 6 … [+3078 chars]"
                        }
                        ,
                        {
                            "source": {
                                "id": "newsweek",
                                "name": "Newsweek"
                            },
                            "author": "Fatma Khaled",
                            "title": "Marjorie2 Taylor Greene Calls AOC, the Squad 'Brave' for Voting Against Infrastructure Bill - Newsweek",
                            "description": "The number of Republicans who think that Donald Trump will \"very likely\" be reinstated as president before 2021 ends increased 2 percent this month.",
                            "url": "https://www.newsweek.com/republicans-saying-trump-likely-reinstated-years-end-jumps-28-percent-1649012",
                            "urlToImage": "https://d.newsweek.com/en/full/1931990/more-republicans-trump-will-reinstated.jpg",
                            "publishedAt": "2021-11-13T21:30:49Z",
                            "content": "A new poll found that more Republicans now think that Donald Trump will likely be reinstated as president before the end of 2021.\r\nThe survey by the Economist/YouGov was conducted between November 6 … [+3078 chars]"
                        }
                        ,
                        {
                            "source": {
                                "id": "newsweek",
                                "name": "Newsweek"
                            },
                            "author": "Fatma Khaled",
                            "title": "Marjorie3 Taylor Greene Calls AOC, the Squad 'Brave' for Voting Against Infrastructure Bill - Newsweek",
                            "description": "The number of Republicans who think that Donald Trump will \"very likely\" be reinstated as president before 2021 ends increased 2 percent this month.",
                            "url": "https://www.newsweek.com/republicans-saying-trump-likely-reinstated-years-end-jumps-28-percent-1649012",
                            "urlToImage": "https://d.newsweek.com/en/full/1931990/more-republicans-trump-will-reinstated.jpg",
                            "publishedAt": "2021-11-13T21:30:49Z",
                            "content": "A new poll found that more Republicans now think that Donald Trump will likely be reinstated as president before the end of 2021.\r\nThe survey by the Economist/YouGov was conducted between November 6 … [+3078 chars]"
                        }
                        ,{
                            "source": {
                                "id": "newsweek",
                                "name": "Newsweek"
                            },
                            "author": "Fatma Khaled",
                            "title": "Marjorie4 Taylor Greene Calls AOC, the Squad 'Brave' for Voting Against Infrastructure Bill - Newsweek",
                            "description": "The number of Republicans who think that Donald Trump will \"very likely\" be reinstated as president before 2021 ends increased 2 percent this month.",
                            "url": "https://www.newsweek.com/republicans-saying-trump-likely-reinstated-years-end-jumps-28-percent-1649012",
                            "urlToImage": "https://d.newsweek.com/en/full/1931990/more-republicans-trump-will-reinstated.jpg",
                            "publishedAt": "2021-11-13T21:30:49Z",
                            "content": "A new poll found that more Republicans now think that Donald Trump will likely be reinstated as president before the end of 2021.\r\nThe survey by the Economist/YouGov was conducted between November 6 … [+3078 chars]"
                        }
                        ,
                        {
                            "source": {
                                "id": "newsweek",
                                "name": "Newsweek"
                            },
                            "author": "Fatma Khaled",
                            "title": "Marjorie5 Taylor Greene Calls AOC, the Squad 'Brave' for Voting Against Infrastructure Bill - Newsweek",
                            "description": "The number of Republicans who think that Donald Trump will \"very likely\" be reinstated as president before 2021 ends increased 2 percent this month.",
                            "url": "https://www.newsweek.com/republicans-saying-trump-likely-reinstated-years-end-jumps-28-percent-1649012",
                            "urlToImage": "https://d.newsweek.com/en/full/1931990/more-republicans-trump-will-reinstated.jpg",
                            "publishedAt": "2021-11-13T21:30:49Z",
                            "content": "A new poll found that more Republicans now think that Donald Trump will likely be reinstated as president before the end of 2021.\r\nThe survey by the Economist/YouGov was conducted between November 6 … [+3078 chars]"
                        }
                        ,
                        {
                            "source": {
                                "id": "newsweek",
                                "name": "Newsweek"
                            },
                            "author": "Fatma Khaled",
                            "title": "Marjorie6 Taylor Greene Calls AOC, the Squad 'Brave' for Voting Against Infrastructure Bill - Newsweek",
                            "description": "The number of Republicans who think that Donald Trump will \"very likely\" be reinstated as president before 2021 ends increased 2 percent this month.",
                            "url": "https://www.newsweek.com/republicans-saying-trump-likely-reinstated-years-end-jumps-28-percent-1649012",
                            "urlToImage": "https://d.newsweek.com/en/full/1931990/more-republicans-trump-will-reinstated.jpg",
                            "publishedAt": "2021-11-13T21:30:49Z",
                            "content": "A new poll found that more Republicans now think that Donald Trump will likely be reinstated as president before the end of 2021.\r\nThe survey by the Economist/YouGov was conducted between November 6 … [+3078 chars]"
                        },
                        {
                            "source": {
                                "id": "newsweek",
                                "name": "Newsweek"
                            },
                            "author": "Fatma Khaled",
                            "title": "Marjorie Taylor Greene Calls AOC, the Squad 'Brave' for Voting Against Infrastructure Bill - Newsweek",
                            "description": "The number of Republicans who think that Donald Trump will \"very likely\" be reinstated as president before 2021 ends increased 2 percent this month.",
                            "url": "https://www.newsweek.com/republicans-saying-trump-likely-reinstated-years-end-jumps-28-percent-1649012",
                            "urlToImage": "https://d.newsweek.com/en/full/1931990/more-republicans-trump-will-reinstated.jpg",
                            "publishedAt": "2021-11-13T21:30:49Z",
                            "content": "A new poll found that more Republicans now think that Donald Trump will likely be reinstated as president before the end of 2021.\r\nThe survey by the Economist/YouGov was conducted between November 6 … [+3078 chars]"
                        },
                        {
                            "source": {
                                "id": "newsweek",
                                "name": "Newsweek"
                            },
                            "author": "Fatma Khaled",
                            "title": "Marjorie Taylor Greene Calls AOC, the Squad 'Brave' for Voting Against Infrastructure Bill - Newsweek",
                            "description": "The number of Republicans who think that Donald Trump will \"very likely\" be reinstated as president before 2021 ends increased 2 percent this month.",
                            "url": "https://www.newsweek.com/republicans-saying-trump-likely-reinstated-years-end-jumps-28-percent-1649012",
                            "urlToImage": "https://d.newsweek.com/en/full/1931990/more-republicans-trump-will-reinstated.jpg",
                            "publishedAt": "2021-11-13T21:30:49Z",
                            "content": "A new poll found that more Republicans now think that Donald Trump will likely be reinstated as president before the end of 2021.\r\nThe survey by the Economist/YouGov was conducted between November 6 … [+3078 chars]"
                        }
                
                    
                



            ],
            laoding : false,
            page:1,
            stopNext:0,
        }

        console.log(this.state.articles);
    }

    async componentDidMount(){
        // console.log('Hello CDM');
        //let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c57abd292f14ee691ab7cfe36596f9e&pageSize=${this.props.pageSize}&page=1` ;
        //this.setState({laoding:true})
        //let data = await fetch(url);

         let data = [
                    {
                        "source": {
                            "id": null,
                            "name": "TVLine"
                        },
                        "author": "Matt Webb Mitovich",
                        "title": "'All Too Well': Taylor Swift Performs the 10-Minute Hit on Saturday Night Live - TVLine",
                        "description": "RELATED STORIES SNL Video: Ted Cruz, Joe Rogan Check In on Vaxxed Big Bird SNL Debuts New Trump With her fifth turn as Saturday Night Live musical guest, Taylor Swift went big, by performing the full, 10-minute version of “All Too Well” — the same song she re…",
                        "url": "https://tvline.com/2021/11/13/snl-taylor-swift-all-too-well-video-10-minute/",
                        "urlToImage": "https://tvline.com/wp-content/uploads/2021/11/snl-taylor-swift-all-too-well.jpg?w=619",
                        "publishedAt": "2021-11-14T05:29:00Z",
                        "content": "With her fifth turn as Saturday Night Live musical guest, Taylor Swift went big, by performing the full, 10-minute version of “All Too Well” — the same song she released a “short film” music video fo… [+1108 chars]"
                    },
                    {
                        "source": {
                            "id": null,
                            "name": "Vox"
                        },
                        "author": "Ellen Ioanes",
                        "title": "What Steve Bannon’s indictment means for Trump’s stonewalling tactics - Vox.com",
                        "description": "A Steve Bannon indictment shows the DOJ willing to enforce Congress’s subpoena power.",
                        "url": "https://www.vox.com/2021/11/13/22779785/bannon-indictment-trump-stonewall-january-6-committee-executive-privilege",
                        "urlToImage": "https://cdn.vox-cdn.com/thumbor/h67rGjU0VU8tFlsp_ld9jKc_rfk=/0x0:3200x1675/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23012151/1228128971.jpg",
                        "publishedAt": "2021-11-13T23:15:14Z",
                        "content": "On Friday, Steve Bannon, a former top adviser to President Donald Trump, was indicted for contempt of Congress, signaling that Trumps ability to shield himself from potentially damning disclosures re… [+7610 chars]"
                    },
                    {
                        "source": {
                            "id": "newsweek",
                            "name": "Newsweek"
                        },
                        "author": "Fatma Khaled",
                        "title": "Marjorie1 Taylor Greene Calls AOC, the Squad 'Brave' for Voting Against Infrastructure Bill - Newsweek",
                        "description": "The number of Republicans who think that Donald Trump will \"very likely\" be reinstated as president before 2021 ends increased 2 percent this month.",
                        "url": "https://www.newsweek.com/republicans-saying-trump-likely-reinstated-years-end-jumps-28-percent-1649012",
                        "urlToImage": "https://d.newsweek.com/en/full/1931990/more-republicans-trump-will-reinstated.jpg",
                        "publishedAt": "2021-11-13T21:30:49Z",
                        "content": "A new poll found that more Republicans now think that Donald Trump will likely be reinstated as president before the end of 2021.\r\nThe survey by the Economist/YouGov was conducted between November 6 … [+3078 chars]"
                    }
                    ,
                    {
                        "source": {
                            "id": "newsweek",
                            "name": "Newsweek"
                        },
                        "author": "Fatma Khaled",
                        "title": "Marjorie2 Taylor Greene Calls AOC, the Squad 'Brave' for Voting Against Infrastructure Bill - Newsweek",
                        "description": "The number of Republicans who think that Donald Trump will \"very likely\" be reinstated as president before 2021 ends increased 2 percent this month.",
                        "url": "https://www.newsweek.com/republicans-saying-trump-likely-reinstated-years-end-jumps-28-percent-1649012",
                        "urlToImage": "https://d.newsweek.com/en/full/1931990/more-republicans-trump-will-reinstated.jpg",
                        "publishedAt": "2021-11-13T21:30:49Z",
                        "content": "A new poll found that more Republicans now think that Donald Trump will likely be reinstated as president before the end of 2021.\r\nThe survey by the Economist/YouGov was conducted between November 6 … [+3078 chars]"
                    }
                    ,
                    {
                        "source": {
                            "id": "newsweek",
                            "name": "Newsweek"
                        },
                        "author": "Fatma Khaled",
                        "title": "Marjorie3 Taylor Greene Calls AOC, the Squad 'Brave' for Voting Against Infrastructure Bill - Newsweek",
                        "description": "The number of Republicans who think that Donald Trump will \"very likely\" be reinstated as president before 2021 ends increased 2 percent this month.",
                        "url": "https://www.newsweek.com/republicans-saying-trump-likely-reinstated-years-end-jumps-28-percent-1649012",
                        "urlToImage": "https://d.newsweek.com/en/full/1931990/more-republicans-trump-will-reinstated.jpg",
                        "publishedAt": "2021-11-13T21:30:49Z",
                        "content": "A new poll found that more Republicans now think that Donald Trump will likely be reinstated as president before the end of 2021.\r\nThe survey by the Economist/YouGov was conducted between November 6 … [+3078 chars]"
                    }
                    ,{
                        "source": {
                            "id": "newsweek",
                            "name": "Newsweek"
                        },
                        "author": "Fatma Khaled",
                        "title": "Marjorie4 Taylor Greene Calls AOC, the Squad 'Brave' for Voting Against Infrastructure Bill - Newsweek",
                        "description": "The number of Republicans who think that Donald Trump will \"very likely\" be reinstated as president before 2021 ends increased 2 percent this month.",
                        "url": "https://www.newsweek.com/republicans-saying-trump-likely-reinstated-years-end-jumps-28-percent-1649012",
                        "urlToImage": "https://d.newsweek.com/en/full/1931990/more-republicans-trump-will-reinstated.jpg",
                        "publishedAt": "2021-11-13T21:30:49Z",
                        "content": "A new poll found that more Republicans now think that Donald Trump will likely be reinstated as president before the end of 2021.\r\nThe survey by the Economist/YouGov was conducted between November 6 … [+3078 chars]"
                    }
                    ,
                    {
                        "source": {
                            "id": "newsweek",
                            "name": "Newsweek"
                        },
                        "author": "Fatma Khaled",
                        "title": "Marjorie3434 ylorTa Greene Calls AOC, the Squad 'Brave' for Voting Against Infrastructure Bill - Newsweek",
                        "description": "The number of Republicans who think that Donald Trump will \"very likely\" be reinstated as president before 2021 ends increased 2 percent this month.",
                        "url": "https://www.newsweek.com/republicans-saying-trump-likely-reinstated-years-end-jumps-28-percent-1649012",
                        "urlToImage": "https://d.newsweek.com/en/full/1931990/more-republicans-trump-will-reinstated.jpg",
                        "publishedAt": "2021-11-13T21:30:49Z",
                        "content": "A new poll found that more Republicans now think that Donald Trump will likely be reinstated as president before the end of 2021.\r\nThe survey by the Economist/YouGov was conducted between November 6 … [+3078 chars]"
                    }
                    ,
                    {
                        "source": {
                            "id": "newsweek",
                            "name": "Newsweek"
                        },
                        "author": "Fatma Khaled",
                        "title": "Marjorie5 Taylor Greene Calls AOC, the Squad 'Brave' for Voting Against Infrastructure Bill - Newsweek",
                        "description": "The number of Republicans who think that Donald Trump will \"very likely\" be reinstated as president before 2021 ends increased 2 percent this month.",
                        "url": "https://www.newsweek.com/republicans-saying-trump-likely-reinstated-years-end-jumps-28-percent-1649012",
                        "urlToImage": "https://d.newsweek.com/en/full/1931990/more-republicans-trump-will-reinstated.jpg",
                        "publishedAt": "2021-11-13T21:30:49Z",
                        "content": "A new poll found that more Republicans now think that Donald Trump will likely be reinstated as president before the end of 2021.\r\nThe survey by the Economist/YouGov was conducted between November 6 … [+3078 chars]"
                    },
                    {
                        "source": {
                            "id": "newsweek",
                            "name": "Newsweek"
                        },
                        "author": "Fatma Khaled",
                        "title": "Marjorie6 Taylor Greene Calls AOC, the Squad 'Brave' for Voting Against Infrastructure Bill - Newsweek",
                        "description": "The number of Republicans who think that Donald Trump will \"very likely\" be reinstated as president before 2021 ends increased 2 percent this month.",
                        "url": "https://www.newsweek.com/republicans-saying-trump-likely-reinstated-years-end-jumps-28-percent-1649012",
                        "urlToImage": "https://d.newsweek.com/en/full/1931990/more-republicans-trump-will-reinstated.jpg",
                        "publishedAt": "2021-11-13T21:30:49Z",
                        "content": "A new poll found that more Republicans now think that Donald Trump will likely be reinstated as president before the end of 2021.\r\nThe survey by the Economist/YouGov was conducted between November 6 … [+3078 chars]"
                    },
                    {
                        "source": {
                            "id": "newsweek",
                            "name": "Newsweek"
                        },
                        "author": "Fatma Khaled",
                        "title": "Marjorie7 Taylor Greene Calls AOC, the Squad 'Brave' for Voting Against Infrastructure Bill - Newsweek",
                        "description": "The number of Republicans who think that Donald Trump will \"very likely\" be reinstated as president before 2021 ends increased 2 percent this month.",
                        "url": "https://www.newsweek.com/republicans-saying-trump-likely-reinstated-years-end-jumps-28-percent-1649012",
                        "urlToImage": "https://d.newsweek.com/en/full/1931990/more-republicans-trump-will-reinstated.jpg",
                        "publishedAt": "2021-11-13T21:30:49Z",
                        "content": "A new poll found that more Republicans now think that Donald Trump will likely be reinstated as president before the end of 2021.\r\nThe survey by the Economist/YouGov was conducted between November 6 … [+3078 chars]"
                    }
            
                
            
            
         ];   

        // let pareseData = JSON.stringify(data);
        let pareseData = Array.from(data);
        // let pareseData = data;
        console.log(pareseData);
        this.setState({
            articles: pareseData,
            totalResults:pareseData.totalResults,
            laoding : false,
        })
    }

    handlePrevious = async ()=>{
        console.log('Prevous');
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c57abd292f14ee691ab7cfe36596f9e&pageSize=${this.props.pageSize}&page=${this.state.page-1}` ;
        this.setState({laoding:true})
        let data = await fetch(url);
        let pareseData = await data.json(data);
        this.setState({
            page:this.state.page-1,
            articles: pareseData.articles,
            stopNext:0,
            laoding : false,
        })
            
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
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c57abd292f14ee691ab7cfe36596f9e&pageSize=${this.props.pageSize}&page=${this.state.page+1}` ;
            this.setState({laoding:true})
            let data = await fetch(url);
            let pareseData = await data.json(data);
            //console.log(pareseData);
            this.setState({
                page:this.state.page+1,
                articles: pareseData.articles,
                stopNext:0,
                laoding : false,
            })
        }

    }


    render() {
        return (
            <div className='container my-5'>
                <h3 className="my-3 text-center">Quick News - Headlines<span>Total Results : {this.state.totalResults}</span></h3>
                {this.state.laoding && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{                
                        return <div key={element?element.title:''} className="col-md-4 my-2">
                            <NewsItem title ={element ? element.title:''} desc={element?element.description:''} imageurl={element?element.urlToImage:''}  newsurl={element?element.url:''} />
                        </div>
                    })}
                </div>
                <div className='d-flex justify-content-around my-5'>
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-2" onClick={this.handlePrevious}>&larr; Previous</button>
                <button disabled={this.state.stopNext==1} type="button" className="btn btn-dark mx-2" onClick={this.handleNext}>Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News
