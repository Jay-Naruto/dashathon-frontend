import { Card, CardContent, Grid } from '@material-ui/core'
import React from 'react'
import Chatbot from '../Chatbot/Chatbot.js';
import Product from './Product.js'
import useStyles from "./stylesProducts"
export default function Products({cart,products,handleAddToCart,handleEmptyCart,user,handleRemoveCart}) {
    const classes=useStyles();

    return (<>
      <img 
      style={{width:'100%'}}
        src="https://wallpaperaccess.com/full/2593108.png"
        />
           <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',alignContent:'space-evenly'}}>
       { [1,2,3,4].map(()=>(<>
      
           <div style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
           <Card style={{width:300,height:320}}>
           <CardContent style={{textAlign:'center'}}>
       SPECIAL OFFERS
           </CardContent>
         </Card>
         
          </div>
      

      </> ))}
       { [1,2,3,4].map(()=>(<>
      
              <div style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
              <Card style={{width:300,height:320}}>
              <CardContent style={{textAlign:'center'}}>
          CATEGORIES
              </CardContent>
            </Card>
            
            </div>
        

        </> ))}
      </div>
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justifyContent="center" spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} handleAddToCart={handleAddToCart} handleEmptyCart={handleEmptyCart} />
            </Grid>
          ))}
        </Grid>
      </main>
      
  <Chatbot cart={cart} user={user} handleAddToCart={handleAddToCart} products={products} handleRemoveCart={handleRemoveCart}/>
    </>)
}
