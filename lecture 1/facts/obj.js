let root ={
    data:10,
    children:[
        {
            data:20,
            children:[
                {
                    data:50,
                    children:[]
                },{
                    data:60,
                    children:[{
                        data:100,
                        children:[]
                    }]
                }
            ]
        },{
            data:30,
            children:[
                {
                    data:70,
                    children:[
                        {
                            data:110,
                            children:[]
                        },{
                            data:120,
                            children:[]
                        }
                    ]
                },{
                    data:80,
                    children:[]
                }
            ]
        },{
            data:40,
            children:[{
                data:90,
                children:[]
            }]
        }
    ]
};

function displaytree(node){
    let mem=node.data+"<=";
    for(let i=0;i<node.children.length;i++){
        mem=mem+node.children[i].data+",";
    }
    console.log(mem);
    for(let i=0;i<node.children.length;i++){
        let child=node.children[i];
        displaytree(child);
    }
}

displaytree(root);