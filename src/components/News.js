import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
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
            "title": "Marjorie Taylor Greene Calls AOC, the Squad 'Brave' for Voting Against Infrastructure Bill - Newsweek",
            "description": "The number of Republicans who think that Donald Trump will \"very likely\" be reinstated as president before 2021 ends increased 2 percent this month.",
            "url": "https://www.newsweek.com/republicans-saying-trump-likely-reinstated-years-end-jumps-28-percent-1649012",
            "urlToImage": "https://d.newsweek.com/en/full/1931990/more-republicans-trump-will-reinstated.jpg",
            "publishedAt": "2021-11-13T21:30:49Z",
            "content": "A new poll found that more Republicans now think that Donald Trump will likely be reinstated as president before the end of 2021.\r\nThe survey by the Economist/YouGov was conducted between November 6 … [+3078 chars]"
        }
    ];

    constructor(){
        super();
        console.log('Hi Constructor from news component');
        this.state= {
            articles : this.articles,
            laoding : false
        }
    }
    render() {
        return (
            <div className='container my-5'>
                <h3 className="my-3">Quick News - Headlines</h3>
                <div className="row">
                    {this.state.articles.map((element)=>{                
                        return <div key={element.url} className="col-md-4 my-2">
                            <NewsItem title ={element.title.slice(0,45)} desc={element.description.slice(0,45)} imageurl={element.urlToImage}  newsurl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News