const Search=()=>{
    return <div style={{ padding: '10px' ,display:"flex", justifyContent:"center",gap:"20px"}}>
      <h2>Restaurant Search  </h2>
      <input
        type="text"
        placeholder="Search restaurants..."
        style={{
          padding: '5px',
          margin:'20px',
          width: '300px',
          fontSize: '16px'
        }}
      />
      </div>
}
export default Search