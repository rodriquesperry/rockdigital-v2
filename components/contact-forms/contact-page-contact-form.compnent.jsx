"use client";
import React from 'react';

const ContactPageForm = () => {
  const scriptSrc = (function (h, b, s, n, i, p, e, t) {
    h._HB_ = h._HB_ || {};
    h._HB_.pid = i;
    t = b.createElement(s);
    t.type = 'text/javascript';
    // t.async = !0;
    t.src = n;
    e = b.getElementsByTagName(s)[0];
    e.parentNode.insertBefore(t, e);
  })(
    window,
    document,
    'script',
    'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js',
    '63337fd5bdae0418290d352b'
  );

  return (
    <>
      <div>
        <div className='hb-p-63337fd5bdae0418290d352b-5'></div>
        <img
          style={{ display: 'none' }}
          src='https://www.honeybook.com/p.png?pid=63337fd5bdae0418290d352b'
          alt=''
        />
      </div>
      <script>{scriptSrc}</script>
    </>
  );
};

export default ContactPageForm;
