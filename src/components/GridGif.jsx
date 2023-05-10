
export const GridGif = ({title, url, id}) => {

    // console.log(url);
  return (
    <div className="card">
        <img src={url.url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
