import React from 'react';
import Translate from '@/components/ui/Translate';
import styles from '../legal.module.css';

export default function CookiePolicy() {
  return (
    <div className={styles.legalContainer}>
      <h1 className={styles.title}>
        <Translate en="Cookie Policy" ar="سياسة ملفات الارتباط" />
      </h1>
      <span className={styles.lastUpdated}>
        <Translate en="Last Updated: August 4, 2026" ar="آخر تحديث: 4 أغسطس 2026" />
      </span>

      <div className={styles.content}>
        <p>
          <Translate 
            en="At Irken Solutions, we use cookies and similar tracking technologies to improve your experience on our website, analyze our traffic, and understand where our visitors are coming from. This policy explains how we use these technologies and your choices regarding them." 
            ar="في إركن سوليوشنز، نستخدم ملفات الارتباط (الكوكيز) وتقنيات التتبع المشابهة لتحسين تجربتك على موقعنا، وتحليل الزيارات، وفهم مصدر زوارنا. توضح هذه السياسة كيفية استخدامنا لهذه التقنيات والخيارات المتاحة لك بشأنها." 
          />
        </p>

        <h2>
          <Translate en="1. What Are Cookies?" ar="1. ما هي ملفات الارتباط؟" />
        </h2>
        <p>
          <Translate 
            en="Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site." 
            ar="ملفات الارتباط هي ملفات نصية صغيرة يتم وضعها على جهاز الكمبيوتر أو الجهاز المحمول الخاص بك عند زيارة موقع ويب. تُستخدم هذه الملفات على نطاق واسع لجعل مواقع الويب تعمل بكفاءة أكبر، فضلاً عن توفير معلومات لمالكي الموقع." 
          />
        </p>

        <h2>
          <Translate en="2. How We Use Cookies" ar="2. كيف نستخدم ملفات الارتباط" />
        </h2>
        <p>
          <Translate en="We use the following types of cookies:" ar="نستخدم الأنواع التالية من ملفات الارتباط:" />
        </p>
        <ul>
          <li>
            <strong><Translate en="Essential Cookies:" ar="ملفات الارتباط الأساسية:" /></strong>{' '}
            <Translate 
              en="These are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You may disable these by changing your browser settings, but this may affect how the website functions." 
              ar="هذه الملفات ضرورية لعمل الموقع بشكل صحيح. إنها تُمكن الوظائف الأساسية مثل الأمان وإدارة الشبكة وإمكانية الوصول. يمكنك تعطيل هذه الملفات عن طريق تغيير إعدادات المتصفح الخاص بك، ولكن هذا قد يؤثر على كيفية عمل الموقع." 
            />
          </li>
          <li>
            <strong><Translate en="Analytics & Performance Cookies:" ar="ملفات ارتباط التحليلات والأداء:" /></strong>{' '}
            <Translate 
              en="We use tools like Google Analytics to collect information about how visitors use our website. This helps us improve the way our website works by ensuring that users are finding what they are looking for easily." 
              ar="نستخدم أدوات مثل Google Analytics لجمع معلومات حول كيفية استخدام الزوار لموقعنا. يساعدنا ذلك في تحسين طريقة عمل موقعنا من خلال التأكد من أن المستخدمين يجدون ما يبحثون عنه بسهولة." 
            />
          </li>
          <li>
            <strong><Translate en="Marketing & Advertising Cookies:" ar="ملفات الارتباط التسويقية والإعلانية:" /></strong>{' '}
            <Translate 
              en="We use technologies like Meta Pixel to track visitor interactions and deliver targeted advertising. These cookies track your online activity to help advertisers deliver more relevant advertising or limit how many times you see an ad." 
              ar="نستخدم تقنيات مثل Meta Pixel لتتبع تفاعلات الزوار وتقديم إعلانات موجهة. تتتبع هذه الملفات نشاطك على الإنترنت لمساعدة المعلنين في تقديم إعلانات أكثر صلة أو تقييد عدد المرات التي ترى فيها إعلانًا." 
            />
          </li>
        </ul>

        <h2>
          <Translate en="3. Third-Party Cookies" ar="3. ملفات الارتباط للجهات الخارجية" />
        </h2>
        <p>
          <Translate 
            en="In some special cases, we also use cookies provided by trusted third parties, such as Google Analytics and Meta Pixel. These third-party analytics are used to track and measure usage of this site so that we can continue to produce engaging content and improve our marketing efforts." 
            ar="في بعض الحالات الخاصة، نستخدم أيضًا ملفات ارتباط مقدمة من جهات خارجية موثوقة، مثل Google Analytics و Meta Pixel. تُستخدم تحليلات الجهات الخارجية هذه لتتبع وقياس استخدام هذا الموقع حتى نتمكن من الاستمرار في إنتاج محتوى جذاب وتحسين جهودنا التسويقية." 
          />
        </p>

        <h2>
          <Translate en="4. Managing Your Cookie Preferences" ar="4. إدارة تفضيلات ملفات الارتباط الخاصة بك" />
        </h2>
        <p>
          <Translate 
            en="You can manage your cookie preferences at any time by using the consent banner that appears when you first visit our site. If you wish to change your preferences later, you can clear your browser cookies to trigger the consent banner again." 
            ar="يمكنك إدارة تفضيلات ملفات الارتباط الخاصة بك في أي وقت باستخدام شريط الموافقة الذي يظهر عند زيارتك لموقعنا لأول مرة. إذا كنت ترغب في تغيير تفضيلاتك لاحقًا، يمكنك مسح ملفات الارتباط الخاصة بمتصفحك لتشغيل شريط الموافقة مرة أخرى." 
          />
        </p>
        <p>
          <Translate 
            en="Additionally, most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience." 
            ar="بالإضافة إلى ذلك، تتيح لك معظم متصفحات الويب التحكم في ملفات الارتباط من خلال إعدادات التفضيلات الخاصة بها. ومع ذلك، إذا قمت بتقييد قدرة مواقع الويب على تعيين ملفات الارتباط، فقد يؤدي ذلك إلى تدهور تجربة المستخدم الإجمالية الخاصة بك." 
          />
        </p>

        <h2>
          <Translate en="5. Contact Us" ar="5. اتصل بنا" />
        </h2>
        <p>
          <Translate 
            en="If you have any questions about our use of cookies or other technologies, please email us at privacy@irken.com.eg." 
            ar="إذا كان لديك أي أسئلة حول استخدامنا لملفات الارتباط أو التقنيات الأخرى، يرجى مراسلتنا عبر البريد الإلكتروني على privacy@irken.com.eg." 
          />
        </p>
      </div>
    </div>
  );
}
