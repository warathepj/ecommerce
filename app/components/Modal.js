import Color from "./Color";
import Qty from "./Qty";
import Button from './Button';

export default function Modal({ onClose }) {
    return (
        <div>

            <p>modal</p>
            <img
                className="w-16" 
                src='https://images.unsplash.com/photo-1612942910539-9ff28b2e00d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <p className="text-red-500">฿400</p>
            <p>คลัง: 100</p>
            <Color />
            <Qty />
            <Button onClick={onClose}> 
        เพิ่มไปยังรถเข็น
      </Button>
        </div>

    );
  }
  