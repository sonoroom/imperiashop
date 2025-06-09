import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Input, Button, Divider } from '@heroui/react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-content1 pt-12 pb-6 border-t">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:cpu" width={24} height={24} className="text-primary" />
              <span className="font-bold text-lg">TechGear</span>
            </div>
            <p className="text-sm text-default-500">
              Your trusted source for high-quality computer hardware and tech equipment.
            </p>
            <div className="flex gap-4">
              <Button isIconOnly variant="flat" size="sm" aria-label="Facebook">
                <Icon icon="lucide:facebook" width={20} />
              </Button>
              <Button isIconOnly variant="flat" size="sm" aria-label="Twitter">
                <Icon icon="lucide:twitter" width={20} />
              </Button>
              <Button isIconOnly variant="flat" size="sm" aria-label="Instagram">
                <Icon icon="lucide:instagram" width={20} />
              </Button>
              <Button isIconOnly variant="flat" size="sm" aria-label="YouTube">
                <Icon icon="lucide:youtube" width={20} />
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-default-500 hover:text-primary">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-default-500 hover:text-primary">Contact Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-default-500 hover:text-primary">Blog</Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-default-500 hover:text-primary">Support</Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-default-500 hover:text-primary">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-medium mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-default-500 hover:text-primary">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-default-500 hover:text-primary">Terms of Service</Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm text-default-500 hover:text-primary">Return Policy</Link>
              </li>
              <li>
                <Link to="/warranty" className="text-sm text-default-500 hover:text-primary">Warranty Information</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-default-500 hover:text-primary">Shipping Details</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-medium mb-4">Newsletter</h3>
            <p className="text-sm text-default-500 mb-4">
              Stay updated with our latest offers and product releases.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Your email"
                type="email"
                size="sm"
                variant="bordered"
                className="max-w-[220px]"
              />
              <Button size="sm" color="primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Divider className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-default-500">
          <p>© 2023 TechGear. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/accessibility" className="hover:text-primary">Accessibility</Link>
            <Link to="/sitemap" className="hover:text-primary">Sitemap</Link>
            <Link to="/legal" className="hover:text-primary">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};