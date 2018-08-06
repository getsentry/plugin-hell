from __future__ import absolute_import
from setuptools import setup, find_packages
import os
import sys

ROOT = os.path.realpath(os.path.join(os.path.dirname(
    sys.modules['__main__'].__file__)))
# The version of plugin-hell
VERSION = '9.1.0.dev0'
install_requires = [

]
tests_require = []

setup(
    name='plugin-hell',
    version=VERSION,
    author='plugin-hell',
    author_email='hello@sentry.io',
    url='https://plugin-hell.io', #TODO(lb): idk...?
    description='Keep track of the health of your Sentry integrations.',
    long_description=open(os.path.join(ROOT, 'README.md')).read(),
    package_dir={'': 'src'},
    packages=find_packages('src'),
    zip_safe=False,
    install_requires=install_requires,
    extras_require={
        'tests': tests_require,
    },
    # cmdclass=cmdclass,
    license='BSD', #TODO(lb): What license?
    include_package_data=True,
    entry_points={
        'console_scripts': [
            'plugin-hell = plugin-hell.runner:main',
        ],
    },
    classifiers=[
        'Framework :: Django',
        'Intended Audience :: Developers',
        'Intended Audience :: System Administrators',
        'Operating System :: POSIX :: Linux',
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 2 :: Only',
        'Topic :: Software Development'
    ],
)