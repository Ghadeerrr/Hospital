import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCartUsers,setElement,setTotal,addOrder,deleteCartLength } from "../reducers/cart/cart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  let disCode = "15dis";
  let userCode;
  const dispatch = useDispatch();
const state = useSelector((state) => {
    return {
      preOrders: state.Cart.preOrders,
      cartUsers: state.Cart.cartUsers,
      elementToDelete: state.Cart.elementToDelete,
      id: state.loginDetails.id,
      cartLength: state.Cart.cartLength,
      total: state.Cart.total
    };
  });

  let array = state.cartUsers[state.id-1].cart;
  let t=0;
  if(state.total==0){
    numItims()
  }
  
  function numItims(){
    let total=0;
    for (let i = 0; i < array.length; i++) {
      if(document.getElementById(array[i].id) != null){
        total+=(array[i].price)*(document.getElementById(array[i].id).value);
      }
      else{
        total+=array[i].price
      }
      
    }
    if(document.getElementById("deliveryOption") != null){
      let deliveryOption = document.getElementById("deliveryOption").value;
      console.log(deliveryOption);
      
      if (deliveryOption == 1) {
        total+=5;
      }
      else{
        total+=15;
      }
    }
    else{
      total+=5;
    }
    
    if(userCode == disCode){
      total=total-(total*0.15);
    }
    const action3 = setTotal(total);
                      dispatch(action3);
  }

  function code(e){
    userCode = e.target.value;
    console.log(userCode);
    if(userCode == disCode){
      numItims()
    }
  }

  function checkOut(){
    console.log("hi");
    
    let arrayOrders = state.preOrders.slice();
    let ar =[];
    let array2=state.cartUsers[state.id-1].cart;
    for (let i = 0; i < array2.length; i++) {
      if(document.getElementById(array2[i].id) != null){
        ar.push({image:array2[i].image,title:array2[i].title,count:document.getElementById(array2[i].id).value})
      }
      else{
        ar.push({image:array2[i].image,title:array2[i].title,count:1})
      }
    }
    let order = {products:ar,total:state.total};

    arrayOrders[state.id-1].preOrders.push(order);
    console.log(arrayOrders);
    
    const actiona = deleteCartLength();
          dispatch(actiona);
    const actionf = addOrder(arrayOrders);
          dispatch(actionf);
          navigate("/previousorders");
          console.log(array);
          

  }
  
  const deletEle=(e)=>{
      return e.id != state.elementToDelete.id;
  }
  const deleteCart = (ele) =>{
    const action2 = setElement(ele);
    dispatch(action2);
      let arr = state.cartUsers.slice();
      let newArr = arr[state.id-1].cart.filter((e)=>deletEle(e))

      arr[state.id-1].cart =newArr.slice();
      const action = setCartUsers(arr);
          dispatch(action);
          
  }
return (

  <section className="h-100 h-custom" style={{backgroundColor: '#cfb997'}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12">
          <div className="card card-registration card-registration-2" style={{borderRadius: '15px'}}>
            <div className="card-body p-0">
              <div className="row g-0">
                <div className="col-lg-8">
                  <div className="p-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                      <h6 className="mb-0 text-muted">{array.length} items</h6>
                    </div>
                    {/* products */}
                    {array.map((ele)=>{
                      // total2+=ele.price;
                      return(
                        <div>
                            <hr className="my-4" />
                                    <div className="row mb-4 d-flex justify-content-between align-items-center">
                                      <div className="col-md-2 col-lg-2 col-xl-2">
                                        <img src={ele.image} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                      </div>
                                      <div className="col-md-3 col-lg-3 col-xl-3">
                                        <h6 className="text-muted">{ele.title}</h6>
                                        <h6 className="text-black mb-0">{ele.category}</h6>
                                      </div>
                                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                        <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                          <i className="fas fa-minus" />
                                        </button>
                                        <input id={ele.id} onChange={numItims} min={1} name="quantity"  defaultValue={1} type="number" className="form-control form-control-sm" />
                                        <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                          <i className="fas fa-plus" />
                                        </button>
                                      </div>
                                      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                        <h6 className="mb-0">{ele.price}</h6>
                                        <button   type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark" onClick={()=>deleteCart(ele)} >Delete</button>
                                      </div>
                                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                        <a href="#!" className="text-muted"><i className="fas fa-times" /></a>
                                      </div>
                                    </div>
                
                        </div>
                    );
                    })}
                    {/* end of products */}
                    
                    <hr className="my-4" />
                    <div className="pt-5">
                      <h6 className="mb-0"><Link to="/"><a href="#!" className="text-body"><i className="fas fa-long-arrow-alt-left me-2" />Back to shop</a></Link></h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 bg-grey">
                  <div className="p-5">
                    <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between mb-4">
                      <h5 className="text-uppercase">items 3</h5>
                      <h5>€ 132.00</h5>
                    </div>
                    <h5 className="text-uppercase mb-3">Shipping</h5>
                    <div className="mb-4 pb-2">
                      <select onChange={numItims} id="deliveryOption" className="select">
                        <option value={1}>Standard-Delivery- 5.00</option>
                        <option value={2}>Quick-Delivery- 15.00</option>
                      </select>
                    </div>
                    <h5 className="text-uppercase mb-3">Give code</h5>
                    <div className="mb-5">
                      <div className="form-outline">
                        <input type="text" id="form3Examplea2" className="form-control form-control-lg" onChange={code} />
                        <label className="form-label" htmlFor="form3Examplea2">Enter your code</label>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between mb-5">
                      <p className="text-uppercase">Total price</p>
                      <p>{state.total}</p>
                    </div>
                    <button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark" onClick={checkOut}>Check Out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


}

export default Cart;
