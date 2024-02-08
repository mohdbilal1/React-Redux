import {createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//create api services
export const postApi=createApi({
    reducerPath:'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints:(builder)=>({
        getAllPost: builder.query({
            query:()=>({
                url:'posts',
                method:"GET"
            })
        }),
        getSinglePostById:builder.query({
            query:(id)=>({
                url:`posts/${id}`,
                method:"GET",
            })
        }),
        getLimitedData:builder.query({
            query:(num)=>{
                console.log('limit no : ',num);
                return{
                    url:`posts?_limit=${num}`,
                    method:'GET'
                }
            }
        })
    })
    
})

export const {useGetAllPostQuery,useGetSinglePostByIdQuery,useGetLimitedDataQuery}=postApi;