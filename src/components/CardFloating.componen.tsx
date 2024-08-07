type TCard = {
    text: string
    position: {
        left?: string;
        top?: string;
        right?: string;
        bottom?: string;
    };
    icon: string | React.ReactNode;
    iconPosition?: 'left' | 'right';
    fontSize?: string;
};

export const CardFloating = ({
    text,
    position,
    icon,
    iconPosition = 'left',
    fontSize = 'font-medium'
}: TCard) => {
    return (
        <div
            className="floating h-[42px] py-2 px-[14px] rounded-full bg-white flex gap-2 items-center z-20 drop-shadow-md"
            style={{
                zIndex: 20,
                position: 'absolute',
                left: position.left,
                top: position.top,
                right: position.right,
                bottom: position.bottom,
            }}>
            {iconPosition === 'left' && typeof icon === 'string' && (
                <img src={icon} alt="" className="size-6 text-[#3A3D43] " />
            )}
            {iconPosition === 'left' && typeof icon === 'object' && icon}
            <p className={`leading-6  font-main font-medium text-sm ${fontSize}`}>{text}</p>
            {iconPosition === 'right' && typeof icon === 'string' && (
                <img src={icon} alt="" className="size-6 text-[#3A3D43] " />
            )}
            {iconPosition === 'right' && typeof icon === 'object' && icon}
        </div>
    );
};