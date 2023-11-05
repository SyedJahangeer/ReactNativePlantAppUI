import { 
  View,
   Text,
   Button,
   SafeAreaView,
   StyleSheet,TextInput,
   TouchableOpacity,
    FlatList,Dimensions,
  Image } 
from 'react-native'
import React from 'react'
import COLORS from '../consts/color';
import Icon from "react-native-vector-icons/MaterialIcons"
import { Plants } from '../consts/Plant';
import plantpot from "../../assets/plantpot.jpg"
function HomeScreen({ navigation }) {
const categories=['POPULAR','ORGANIC','INDOORS','SYNTHETIC']
const [categorIndex,setCategorIndex]=React.useState(0)

const  CategoryList=()=>{
    return(
         <View style={styles.Category}>
           {categories.map((item,index)=>(
        <TouchableOpacity activeOpacity={0.8} key={index} onPress={()=>setCategorIndex(index)}>
        <Text  style={[styles.categoryText,categorIndex==index&&styles
        .CategorySelected]}>{item}
        
        </Text></TouchableOpacity>))} 
        </View>
        )
}


    return (
      <SafeAreaView style={styles.header}>
        <View>
            
            <Text style={{fontSize:25,fontWeight:"bold",color:"black"}}>Wellcome to</Text>
            <View style={{flexDirection:"row"}}>
            <Text style={{fontSize:38,fontWeight:"bold",color:COLORS.green}}>Plant Shop</Text>
            <Text> <Icon name="shopping-cart" size={30}/> </Text>
            </View>
            
            <View style={{marginTop:30,flexDirection:"row" ,backgroundColor:COLORS.light,width:450 ,margin:10}}>
            
                <Icon name="search" size={25} style={{marginTop:10,marginLeft:15}}/>
                <TextInput placeholder="Search" style={styles.input} />
                            {/* View Starts Here */}
                <View style={styles.sortBtn}>
                <Icon name="sort" size={30}/>
                
                </View>     
                        
            </View>
            <View>
                <CategoryList/>
                <FlatList 
                columnWrapperStyle={{justifyContent:"space-evenly"}}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{marginTop:10,paddingBottom:50}}
                numColumns={2}  style={{padding:5}}   data={Plants}
 renderItem={({item,index})=>{
  
  return(
  <TouchableOpacity onPress={()=>navigation.navigate("Notifications",item)}> 
  <View style={styles.Card}><View style={{alignItems:"flex-end"}}>
    <View style={{width:30,height:30,backgroundColor:item.like?'pink':'grey',borderRadius:15,alignContent:"center",alignItems:"center"}}><Icon style={{margin:5}}name="favorite" size={18}/></View>
    <View style={{height:140,alignItems:"center"}}>
    <Image source={require("../../assets/plantinpot.png")}  style={{height:200,width:200,flex:1}}/>
    <Text>{item.name}</Text>
  
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:5,width:Dimensions.get("screen").width/2-50}}><Text>Price dffed</Text>
    <View style={{backgroundColor:"green", borderRadius:5,}}><Icon name="add" size={20} color="white"/></View>
    </View>

    </View>
    </View>
  </TouchableOpacity>
  )}}/>        


            </View>
            </View> 
            
        {/* <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        /> */}
{/* <CategoryList/> */}
  
    </SafeAreaView>
    );
  }

  const styles=StyleSheet.create({
    header:{
        marginTop:20,
        flexDirection:"row",
        justifyContent:"space-between",
        margin:5,
        
    },
    input:{
        fontWeight:"bold",
        fontSize:18,
        color:COLORS.dark,
        flex:1
    },
    sortBtn:{
        marginLeft:10,
        height:50,
        width:50,
        color:"blck",
        fontWeight:"bold",
        backgroundColor:COLORS.green,
        justifyContent:"center",
        alignItems:"center",
    },
    Category:{
        flexDirection:"row",
        marginTop:30,
        marginBottom:20,
        justifyContent:"space-evenly",
        

    },
    categoryText:{
      fontSize:16,
      color:"grey",
      fontWeight:"bold",
    },
    CategorySelected:{
      color:COLORS.green,
      padding:3,
      borderBottomWidth:2,
      borderColor:COLORS.green,
    },
    Card:{
      height:225,
      backgroundColor:COLORS.light,
      width:Dimensions.get("screen").width/2-30,
      marginHorizontal:2,
      borderRadius:10,
      marginBottom:20,
      padding:15,
    }

  })
  export default HomeScreen