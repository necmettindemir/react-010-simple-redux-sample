
import { useDispatch, useSelector } from 'react-redux';

import { Menu } from "pages/Menu";
import { deposit, withdraw } from 'reduxStore/slice/balanceSlice';

export const Page2Balance = () => {

    const dispatch = useDispatch();
    const balance = useSelector((state) => state.balance.value);

    return (         
            <div>
                <Menu />
                <div>Page2</div>                    

                <br />
                <button onClick={ () => { dispatch(deposit(10))  }}>deposit 10</button>                
                <br/>
                <button onClick={ () => { dispatch(withdraw(20))  }}>witdraw 20</button>
                <br/>

                <hr />
                Current Balance at Page 2 : {balance}
                <hr />
            </div>            
    );
}
 
