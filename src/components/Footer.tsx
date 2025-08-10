import Link from 'next/link'

function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-2">ENSTP Study</h3>
            <p className="text-sm text-muted-foreground">
              Your comprehensive academic resource platform
            </p>
          </div>

          <div className="text-center">
            <h4 className="font-medium mb-2">Developed by Cherif Tas</h4>
            <div className="flex space-x-4 justify-center">
              <Link
                href="https://www.instagram.com/cherifsuii?igsh=Mml6MGlndmtobGJk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-orange-600 transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="https://www.linkedin.com/in/cherif-tas-7504b8319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-orange-600 transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="https://t.me/Tascherif"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-orange-600 transition-colors"
              >
                Telegram
              </Link>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2024 ENSTP Study. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer