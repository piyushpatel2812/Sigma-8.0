import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1619782532574-38acd218a71e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    return (
        <div className="InfoBox">
        
        <div className='cardContainer'>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
      {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <div>Temperature={info.temp}&deg;c</div>
          <div>Humidity={info.humidity}</div>
          <div>Min temp={info.tempMin}&deg;c</div>
          <div>Max temp={info.tempMax}&deg;c</div>
          <div>The weather feels like={info.feelsLike}&deg;c</div>
        </Typography>
      </CardContent>
      
    </Card>
      </div>
    </div>
    );
}