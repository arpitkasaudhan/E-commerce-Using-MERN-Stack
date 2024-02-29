// A mock function to mimic making an async request for data
export function  fetchAllProducts(amount = 1) {
  return new Promise(async(resolve) =>{
    // Todo we will not hard code server url here
    const response =await fetch('http://localhost:8000/products')
    const data=await response.json()
    resolve({data})
  }
  );
}