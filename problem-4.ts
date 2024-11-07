{
    type Circle = {
        shape: "circle";
        radius: number;
    }

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    }

    type Shape = Circle | Rectangle;

    const calculateCircleArea = (obj: Shape) : number => {
        if(obj.shape === "circle") return Math.PI * obj.radius * obj.radius;
        if(obj.shape === "rectangle") return obj.height * obj.width
        return 0;
    }
}