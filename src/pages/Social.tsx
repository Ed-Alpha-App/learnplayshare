
import React from 'react';
import Layout from '@/components/Layout';
import { Avatar } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { MessageCircle, Heart, Share2, BookmarkIcon, Image, Smile } from 'lucide-react';

interface PostProps {
  username: string;
  handle: string;
  content: string;
  timeAgo: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  isVerified?: boolean;
}

const Post: React.FC<PostProps> = ({
  username,
  handle,
  content,
  timeAgo,
  imageUrl,
  likes,
  comments,
  isVerified,
}) => {
  return (
    <div className="border-b border-gray-200 pb-4">
      <div className="flex items-start gap-3 p-4">
        <Avatar className="h-10 w-10">
          <div className="bg-gradient-to-br from-purple-400 to-blue-500 h-full w-full flex items-center justify-center text-white font-medium">
            {username.charAt(0)}
          </div>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <span className="font-bold text-sm">{username}</span>
            {isVerified && (
              <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z" />
              </svg>
            )}
            <span className="text-gray-500 text-sm">@{handle}</span>
            <span className="text-gray-500 text-xs">· {timeAgo}</span>
          </div>
          
          <p className="mt-1 text-sm">{content}</p>
          
          {imageUrl && (
            <div className="mt-3 rounded-xl overflow-hidden">
              <img src={imageUrl} alt="" className="w-full h-auto" />
            </div>
          )}
          
          <div className="flex items-center gap-6 mt-3">
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
              <MessageCircle size={18} />
              <span className="text-xs">{comments}</span>
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-red-500">
              <Heart size={18} />
              <span className="text-xs">{likes}</span>
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-green-500">
              <Share2 size={18} />
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-yellow-500">
              <BookmarkIcon size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrendingItem: React.FC<{ title: string; imageUrl: string }> = ({ title, imageUrl }) => {
  return (
    <div className="relative rounded-lg overflow-hidden h-28 w-28">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
        <p className="text-white text-xs font-medium p-2">{title}</p>
      </div>
    </div>
  );
};

const Social: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col pb-20">
        {/* Create post area */}
        <div className="border-b border-gray-200 p-4">
          <div className="flex gap-3">
            <Avatar className="h-10 w-10">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-500 h-full w-full flex items-center justify-center text-white font-medium">
                Y
              </div>
            </Avatar>
            <div className="flex-1 bg-gray-100 rounded-full flex items-center px-4">
              <input 
                type="text" 
                placeholder="What's happening?"
                className="bg-transparent w-full outline-none text-sm py-2"
              />
            </div>
            <button className="text-purple-500">
              <Image size={20} />
            </button>
            <button className="text-purple-500">
              <Smile size={20} />
            </button>
          </div>
        </div>
        
        {/* Trending section */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-bold text-lg mb-3">Trending Stories</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            <TrendingItem 
              title="Art & Culture" 
              imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=300&h=300" 
            />
            <TrendingItem 
              title="Technology" 
              imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=300&h=300" 
            />
            <TrendingItem 
              title="Travel" 
              imageUrl="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=300&h=300" 
            />
          </div>
        </div>
        
        {/* Your Feed section */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-bold text-lg mb-1">Your Feed</h2>
        </div>
        
        {/* Posts */}
        <div className="divide-y divide-gray-200">
          <Post
            username="Addison"
            handle="addison"
            isVerified={true}
            timeAgo="2h"
            content="I have a report on climate change due tomorrow and would be great if anyone could review it for me!"
            likes={24}
            comments={8}
          />
          
          <Post
            username="Marcus Lee"
            handle="marcuslee"
            timeAgo="6h"
            content="Just finished my science project on renewable energy! Check it out!"
            imageUrl="https://images.unsplash.com/photo-1508515053963-70c7cc39dfb5?auto=format&fit=crop&w=500&h=300"
            likes={76}
            comments={14}
          />
          
          <Post
            username="Sarah Wilson"
            handle="sarahw"
            timeAgo="1d"
            content="Looking for study partners for the upcoming history exam. Anyone interested?"
            likes={42}
            comments={23}
          />
        </div>
        
        {/* Bottom Navigation */}
        <div className="fixed bottom-16 left-0 right-0 flex justify-center py-2 bg-white border-t border-gray-200">
          <div className="flex gap-10">
            <button className="flex flex-col items-center text-purple-500">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
              </svg>
              <span className="text-xs mt-1">Home</span>
            </button>
            <button className="flex flex-col items-center text-gray-400">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
              </svg>
              <span className="text-xs mt-1">Search</span>
            </button>
            <button className="flex flex-col items-center text-gray-400">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
              </svg>
              <span className="text-xs mt-1">Activity</span>
            </button>
            <button className="flex flex-col items-center text-gray-400">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
              </svg>
              <span className="text-xs mt-1">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Social;
