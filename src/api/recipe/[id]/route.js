import { recipes } from '@/db/schema'
import {db} from '../../../db/db'

export async function GET(request,urlId){
  const id=urlId.params.id *1
 try {
  const recipe=await db.select().from(recipes).where(eq(recipes.id,id)) //return in array
  if(recipe.length === 0){
    return Response.json({
      message:'no recipe found with that id'
    },{status:404})
  }
  return Response.json({
    message:'Data fetched successfully',
    recipe
  },{status:200})
 } catch (error) {
  return Response.json({
    message:error.message
  },{status:500})
 }
}

export async function Delete(request,urlId) {
  const id=urlId.params.id *1
  try {
    await db.delete(recipes).where(eq(recipes.id,id))
    return Response.json({
      message:'Data deleted successfully'
    },{status:200})
  } catch (error) {
    return Response.json({
      message:error.message
    },{status:500})
  }
  
}