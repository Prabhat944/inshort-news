import styles from './NewsCard.module.css';


const NewsCard=({newsItem})=>{
    const GivenTime=new Date(newsItem.publishedAt);
    const date=GivenTime.toString().split(" ");
    const morning=parseInt(date[4].substring(0,2)) > 12?false:true;

    return(
        <div className={styles.card}>
            <div className={styles.newsImg}>
                <img src={newsItem.urlToImage?newsItem.urlToImage:'https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/134557216-no-thumbnail-image-placeholder-for-forums-blogs-and-websites.jpg?ver=6'} alt='articleImg'/>
            </div>
            <div className={styles.newsDetail}>
                <span className={styles.title}>{newsItem.title}</span>
                <span className={styles.shorts}><b><a href={newsItem.url}  target='__blank'>short</a></b> by 
                {newsItem.author?newsItem.author:'unknown'} /{" "} 
                {morning? `${date[4].substring(0,2)}:${date[4].substring(3,5)} am`:`${date[4].substring(0,2)-12} : ${date[4].substring(3,5)} pm`} on{' '}
                {date[2]} {date[1]} {date[3]},{date[0]} </span> 
                <span className={styles.content}>{newsItem.content?newsItem.content:'Check author article for more information'}</span>
                <span className={styles.readMore}>read more at <a href={newsItem.url} target='__blank'><b>{newsItem.source.name}</b></a></span>
            </div>
            
        </div>
    )
};

export default NewsCard;