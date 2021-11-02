import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import { ICatagory } from "../api/interface/iCatalog";

export const getCatalogs = createAsyncThunk(
    "catalog/getCatalogs",
    async (dispatch, getState) => {
    
        const { data } = await Axios.get("/api/CatalogApi/getcatalogs");
        console.log(data['catagories'])
      return data['Categories']
    }
);

export const getSubCatalogs =  createAsyncThunk(
  "catalog/getSubCatalogs",
  async (catalogId:number, thunkAPI) => {
     
     // try
    //  {
        debugger;
     
        const { data } = await Axios.get("/api/CatalogApi/getsubcatalogs/" + catalogId);
      
        console.log('Subcatagories thunk')
        console.log(data)
      return data;
    /*  }
     catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      debugger;
      console.log('da co loi')
      console.log(err)
    }*/
     
  }
);

interface CatalogState {    
  catagories: ICatagory[]   
  subCatagories: ICatagory[]  
  isLoading: boolean
  error:  string|undefined
}

const catalogInitialState: CatalogState = {    
  catagories: [],   
  subCatagories: [],    
  isLoading: false,
  error: undefined
}

function startLoading(state: CatalogState) {
  state.isLoading = true
}



const catalogsSlice = createSlice({
  name: 'catalog',
  initialState: catalogInitialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getCatalogs.fulfilled, (state, action) => {
      // Add user to the state array
      // state.isLoading = false
      state.catagories = action.payload
      state.isLoading = true
      //state.catagories = new string[2]{'dsdsd','sdsdsd'};
    })

    builder.addCase(getSubCatalogs.fulfilled, (state, action) => {
      // Add user to the state array
      // state.isLoading = false
      state.subCatagories = action.payload
      state.isLoading = true
      //state.catagories = new string[2]{'dsdsd','sdsdsd'};
    })
    
    .addCase(getCatalogs.pending, (state) => {
      startLoading(state)
      
    
    })
    .addCase(getCatalogs.rejected, (state, action) => {
      state.error = action.error.message
      //loadingFailed(state, action)
    })
  },
})
  
 
  
 
  
  export default catalogsSlice.reducer;