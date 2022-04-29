import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialStateValue={apidata:{email:'dummy@email.com',website:'',phone:'',active:''},Data:[],status:null}



export const fetchedAsync=createAsyncThunk('getAPIdata',async ()=>{
       try {
        const response= await axios.get('http://localhost:3001/fetchApi')
        const pay =response.data.filteredData
        console.log(response.data.filteredData);
        console.log(pay);
        return pay
       } catch (error) {console.log(error);
           
       } 

})

const ApiData=createSlice(
    {
        name:'GetApi',
        initialState:initialStateValue,
        reducers:{
            changeactive:(state,action)=>{
                state.Data[action.payload].active=false    
            },
            updtphone:(state,action)=>{
                state.apidata.phone=action.payload
            },
            fetchapi:(state,action)=>{
                state.Data=action.payload
                // state.apidata.website=initialStateValue
            },
        },
        extraReducers:(builder)=>builder.addCase(fetchedAsync.fulfilled,(state,action)=>{console.log(action.payload);
            state.Data=(action.payload)})
        // extraReducers:{
        //     [fetchedAsync.fulfilled]:(state,action)=>{
        //         state.Data=action.payload   
        //         state.status='successful'
        //     },
        //     [fetchedAsync.pending]:(state,action)=>{
        //         state.Data='pending'
        //         state.status='pending'
        //     },
        //     [fetchedAsync.rejected]:(state,action)=>{
        //         state.Data='rejected'
        //         state.status='rejected'
        //     }
        // }


    }
)

export const {changeactive,updtphone,fetchapi}=ApiData.actions
export default ApiData.reducer
