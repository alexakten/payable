import Image from 'next/image';
import React from 'react';

interface MessageCardProps {
  imageUrl: string;
  name: string;
  date: string;
  message: string[];
  imagePosition: 'left' | 'right';
}

const MessageCard: React.FC<MessageCardProps> = ({ imageUrl, name, date, message, imagePosition }) => {
  return (
    <div className={`flex items-end gap-2 ${imagePosition === 'right' ? 'flex-row-reverse' : ''}`}>
      {/* Profile Image */}
      <div className="relative h-8 w-8 overflow-hidden min-w-[32px] rounded-full bg-zinc-400">
        <Image
          src={imageUrl}
          alt={`Portrait of ${name}`}
          layout="fill"
          objectFit="cover"
          priority
          className={imagePosition === 'right' ? '' : 'scale-x-[-1]'}
        />
      </div>
      {/* Message Wrapper */}
      <div className={`flex max-w-sm flex-col rounded-xl ${imagePosition === 'right' ? 'rounded-br-none' : 'rounded-bl-none'} bg-zinc-200 p-3`}>
        {/* Name and Status Wrapper */}
        <div className="flex gap-2">
          <p className="text-xs font-medium">{name}</p>
          <div className="flex items-center gap-1">
            <div className="bg-green h-1 w-1 rounded-full"></div>
            <p className="text-[8px]">{date}</p>
          </div>
        </div>
        {/* Message Content */}
        <div className="mt-1 text-xs text-zinc-800">
          <div className="mt-1 text-xs text-zinc-800">
            {message.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < message.length - 1 && line !== "" && <br />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageCard;
