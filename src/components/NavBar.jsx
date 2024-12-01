import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useAuth } from './AuthContext';

/**
 * Navigation bar component with theme switching and authentication
 */
export function NavBar() {
    const navigate = useNavigate();
    const { signout } = useAuth();

    const handleSignOut = async () => {
        try {
            await signout();
            navigate('/signin');
        } catch (error) {
            throw new Error('Failed to sign out', { cause: error });
        }
    };

    return (
        <nav className="border-b bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-foreground">ReserveEase</span>
                        </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                        <Button variant="ghost" onClick={handleSignOut}>
                            Sign out
                        </Button>
                    </div>
                    <div className="flex items-center sm:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Open main menu</span>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="sm:hidden">
                <div className="pt-2 pb-3 space-y-1">
                    <div className="px-3"></div>
                    <Button
                        variant="ghost"
                        className="block w-full text-left px-3 py-2 text-base font-medium"
                        onClick={handleSignOut}
                    >
                        Sign out
                    </Button>
                </div>
            </div>
        </nav>
    );
}
