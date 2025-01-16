const ContactItem = ({ icon, text, link, delay }) => {
    return (
        <div data-aos="fade-up" data-aos-delay={delay} className="flex items-center space-x-3">
            <div>{icon}</div>
            <div>
                {link ? (
                    <a href={link} target="_blank" className="text-purple-700 hover:text-purple-900">{text}</a>
                ) : (
                    <span>{text}</span>
                )}
            </div>
        </div>
    );
};

export default ContactItem;