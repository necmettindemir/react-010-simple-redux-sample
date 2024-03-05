
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from 'reduxStore/slice/balanceSlice';
import { Menu } from "pages/Menu";


export const Page1Balance = () => {

    const dispatch = useDispatch();
    const balance = useSelector((state) => state.balance.value);

    return (         
            <div>
                <Menu />
                <div>Page1</div>                    

                <br />
                <button onClick={ () => { dispatch(deposit(10))  }}>deposit 10</button>                
                <br/>
                <button onClick={ () => { dispatch(withdraw(20))  }}>witdraw 20</button>
                <br/>

                <hr />
                Current Balance at Page 1 : {balance}
                <hr />
            </div>            
    );
}
 
