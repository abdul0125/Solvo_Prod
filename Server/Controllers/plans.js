import PlansModel from '../Models/plans.js';

export const Plans = async (req,res) => {
    const {userid,Weekly,Monthly} = req.body;
    const Data= req.body;


    const oldPlan = await PlansModel.findOne({ userid });

    if(oldPlan)
    {   
        PlansModel.findOneAndUpdate(userid,
            {
                $set: {
                    Weekly:Weekly,
                    Monthly:Monthly
                },
            },

            {new:true})
        .then((docs)=>{
        if(docs) {
            console.log("updated")
            res.status(201).json(`Plans edited`)
        }
    },
    
        ).catch((err)=>{
            console.log(err)
            res.status(400).json(`Plans does not stored`);
        });

    }

    else
    {
        const newPlan = new PlansModel(Data);
        try{
            const data = await newPlan.save();
            if(data){
                res.status(201).json(newPlan);
            }
            else{
                res.status(400).json(`Plans does not stored`);
            }

        }
        catch(error)
        {
            res.status(409).json({message:error.message});
        }
    }

}