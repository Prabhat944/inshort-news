import styles from './NewsContent.module.css';
import Container from '@mui/material/Container';
import NewsCard from '../NewsCard/NewsCard';

const NewsContent=({newsArray,newsResult,loadMore,setLoadMore})=>{

    return(
        <Container maxWidth="md" >
            <div>
              <div className={styles.appDownload}>
               <span>For the best experience use inshorts app on your smartphone</span>
               <img src='https://assets.inshorts.com/website_assets/images/appstore.png' alt='applestore' />
               <img src='https://assets.inshorts.com/website_assets/images/playstore.png' alt='playstore' />
              </div>
              <div className={styles.newscard}>
              {newsArray.map((newsItem)=>(
                    <NewsCard newsItem={newsItem} key={newsItem.title}/>
              ))}
              </div>
              { loadMore <= newsResult &&
              <div className={styles.load}>
              <button className={styles.loadmore} onClick={()=>{setLoadMore(loadMore + 20)}}>Load more</button>
              </div>
                  }
            </div>
        </Container>
    )
};

export default NewsContent;